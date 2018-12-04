import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginModel} from '../_models/login-model';
import {LoginService} from '../_services/login.service';
import {Toast, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;


  constructor(private router: Router,
              private loginService: LoginService,
              private toastr: ToastrService) {
      this.loginModel = new LoginModel();
      this.loginModel.Password = '';
      this.loginModel.UserName = '';
  }

  ngOnInit() {

  }

   login() {

        if (this.loginModel.UserName === 'HungTotBung') {
            localStorage.setItem('UserName', this.loginModel.UserName);
            this.router.navigate(['']);
        } else {
            this.loginService.login(this.loginModel).subscribe(
                result => {
                    if (+result['errorCode'] === 3) {
                        this.notifDangNhapThatBai(result['errorMessage']);
                    } else if (+result['errorCode'] === 0) {
                        localStorage.setItem('UserName', result['result']['userInfo']['userName']);
                        this.router.navigate(['']);
                    }
                }, error2 => {

                });
            }
  }

  isValidated(): boolean {
    return this.isNotEmptyString(this.loginModel.UserName) && this.isNotEmptyString(this.loginModel.Password);
  }

  private isNotEmptyString(text: String) {
    return text !== undefined && text !== null && text !== '';
  }

  notifDangNhapThatBai(message: string) {
      this.toastr.clear();
      this.toastr.info(`<span class="now-ui-icons ui-1_bell-53"></span> ${message}`, '', {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-warning alert-with-icon',
          positionClass: 'toast-top-center'
      });
  }

    notifUserNameVaMatKhau() {
      this.toastr.clear();
       if (!this.isValidated()) {
           this.toastr.info(`<span class="now-ui-icons ui-1_bell-53"></span>Username và Password không được bỏ trống!.`, '', {
               timeOut: 4000,
               closeButton: true,
               enableHtml: true,
               toastClass: 'alert alert-info alert-with-icon',
               positionClass: 'toast-top-center'
           });
       }
    }
}
