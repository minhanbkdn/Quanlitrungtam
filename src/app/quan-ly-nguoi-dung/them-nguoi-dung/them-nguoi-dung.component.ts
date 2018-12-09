import { Component, OnInit } from '@angular/core';
import { AddUser } from 'app/_models/add-user.model';
import {ApiService} from '../../_services/api.service';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserManagerService } from 'app/_services/user-manager-service';
import {SharingService} from '../../_services/sharing.service';
import { Router} from '@angular/router';
import { Group } from 'app/_models/group.model';
import { GroupService } from 'app/_services/group.service';
@Component({
  selector: 'app-them-nguoi-dung',
  templateUrl: './them-nguoi-dung.component.html',
  styleUrls: ['./them-nguoi-dung.component.scss']
})
export class ThemNguoiDungComponent implements OnInit {

    
    userInfo: AddUser;
    listGroup: Group;
    formAddUser: FormGroup;
    constructor(
        private groupService: GroupService,
        private userManagerService: UserManagerService,
        private sharingService: SharingService,
        private router: Router,
        private fb: FormBuilder
    ) {
      this.getListGroup();
  }

  ngOnInit() {
    this.formAddUser = this.fb.group({
      Username: ['', Validators.required],
      Ho: ['', Validators.required],
      Ten: ['', Validators.required],
      Email: ['', Validators.required, Validators.email],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      NgaySinh: ['', Validators.required],
      GioiTinh: [true],
      DiaChi: [''],
      SoDienThoai: [''],
      IdGroup: [null, Validators.required]
    })
  }


  onSubmit(value: any) {
    console.log(value);
    this.userManagerService.add(value).subscribe(
      result => {
        console.log(result);
        if (+result['Code'] === 200) {
            this.sharingService.notifInfo('Thêm người dùng thành công');
            this.router.navigate(['/nguoi-dung']);
        } else {
            this.sharingService.notifError('Thêm người dùng thất bại: ' + result['MsgError']);
        }
    }, error2 => {
        this.sharingService.notifError('Thêm người dùng  thất bại: ' + error2['MsgError ']);
    }
    )

  }

  getListGroup() {
    this.groupService.getListGroup(null).subscribe(
      result => {
        this.listGroup = result['Data']['GroupList'];
      }
    )
  }

}
