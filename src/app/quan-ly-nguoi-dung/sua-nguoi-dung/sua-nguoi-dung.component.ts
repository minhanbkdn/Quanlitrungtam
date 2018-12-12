import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserManagerService } from 'app/_services/user-manager-service';
import { SharingService } from 'app/_services/sharing.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AddUser } from 'app/_models/add-user.model';
import { UserInfo } from 'app/_models/userinfo.model';
import {DatePipe, JsonPipe} from '@angular/common'
import { Group } from 'app/_models/group.model';
import { GroupService } from 'app/_services/group.service';
@Component({
  selector: 'app-sua-nguoi-dung',
  templateUrl: './sua-nguoi-dung.component.html',
  styleUrls: ['./sua-nguoi-dung.component.scss']
})
export class SuaNguoiDungComponent implements OnInit {

  userInfo: AddUser ;
  formEditUser: FormGroup;
  listGroup: Group[];
  constructor(
    private userManagerService: UserManagerService,
    private sharingService: SharingService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dataPipe: DatePipe,
    private groupService: GroupService
  ) {
    this.getListGroup();
  }

  async ngOnInit(){
    await this.getUser();
    const id = this.route.snapshot.paramMap.get('id');
    this.formEditUser = this.fb.group({
      
      Username: [ {value: this.userInfo.Username, disabled: true}, Validators.required],
      Ho: [this.userInfo.Ho, Validators.required],
      Ten: [this.userInfo.Ten, Validators.required],
      Email: [ {value:this.userInfo.Email, disabled: true}, Validators.required, Validators.email],
      NgaySinh: [this.transform(this.userInfo.NgaySinh), Validators.required],
      GioiTinh: [this.userInfo.GioiTinh, Validators.required],
      DiaChi: [this.userInfo.DiaChi],
      IdGroup: [this.userInfo.IdGroup , Validators.required],
      SoDienThoai: [this.userInfo.SoDienThoai, Validators.required],
      Id: [id]
    })
  }


  onSubmit(value: any) {
    console.log(value);
    this.userManagerService.edit(value).subscribe(
      result => {
        if (+result['Code'] === 200) {
          this.sharingService.notifInfo('Sửa người dùng thành công');
          this.router.navigate(['/nguoi-dung']);
        } else {
          this.sharingService.notifError('Sửa người dùng thất bại: ' + result['MsgError']);
        }
      }, error2 => {
        this.sharingService.notifError('Sửa người dùng  thất bại: ' + error2['MsgError ']);
      }
    )

  }

  getUser(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id: '+ id);
    return this.userManagerService.getById(id).toPromise().then(
      result => {
        this.userInfo =  result['Data']['User'];
        console.dir("userinfor: " + JSON.stringify(this.userInfo));
      },
      error2 => {
        this.router.navigate(['/nguoi-dung']);
        return ;
      }
    )
  }

  transform(date):any {
    return this.dataPipe.transform(date, 'yyyy-MM-dd');
  }

  getListGroup() {
    this.groupService.getListGroup(null).subscribe(
      result => {
        this.listGroup = result['Data']['GroupList'];
      }
    )
  }

}
