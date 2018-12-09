import { Component, OnInit } from '@angular/core';
import { AddUser } from 'app/_models/add-user.model';
import {ApiService} from '../../_services/api.service';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserManagerService } from 'app/_services/user-manager-service';
import {SharingService} from '../../_services/sharing.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-them-nguoi-dung',
  templateUrl: './them-nguoi-dung.component.html',
  styleUrls: ['./them-nguoi-dung.component.scss']
})
export class ThemNguoiDungComponent implements OnInit {

    
    userInfo: AddUser;
    formAddUser: FormGroup;
    constructor(
        private userManagerService: UserManagerService,
        private sharingService: SharingService,
        private router: Router,
        private fb: FormBuilder
    ) {
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
      IdGroup: [null, Validators.required]
    })
  }


  onSubmit(value: any) {
    this.userManagerService.add(value).subscribe(
      result => {
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

}
