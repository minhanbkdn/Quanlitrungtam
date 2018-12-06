import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginModel} from '../_models/login-model';
import {LoginService} from '../_services/login.service';
import {Toast, ToastrService} from 'ngx-toastr';
import {Md5} from 'ts-md5/dist/md5';
import {UserService} from '../_services/user.service';
import { JsonwtService } from 'app/_services/jsonwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;


  constructor(
      private router: Router,
      private loginService: LoginService,
      private userService: UserService,
      private jwtService: JsonwtService,
      private toastr: ToastrService) {
      this.loginModel = new LoginModel();
      this.loginModel.Password = '';
      this.loginModel.UserName = '';
      
  }

  ngOnInit() {

  }

   login() {
        const md5 = new Md5();
        this.loginModel.Password = md5.appendStr(this.loginModel.Password).end().toString();
        console.log(this.loginModel.Password);
        
        this.loginService.login(this.loginModel).subscribe(
            result => {
                console.log(result);
                console.log(result['IsSuccess']);
                if (result['IsSuccess'] === false) {
                    this.notifDangNhapThatBai(result['MsgError']);
                } else if (result['IsSuccess'] === true) {
                    this.userService.setAuth(result['Data']['Profile']);
                    this.jwtService.saveToken(result['Data']['Token']);
                    localStorage.setItem('UserName', result['Data']['Profile']['Ten']);
                    this.router.navigate(['']);
                }
            }, error2 => {

        });
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
