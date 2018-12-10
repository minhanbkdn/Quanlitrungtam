import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../../_models/userinfo.model';
import { UserManagerService } from 'app/_services/user-manager-service';
import { QueryUser } from 'app/_models/queryuser.model';
import { Group } from 'app/_models/group.model';

@Component({
  selector: 'app-danh-sach-nguoi-dung',
  templateUrl: './danh-sach-nguoi-dung.component.html',
  styleUrls: ['./danh-sach-nguoi-dung.component.scss']
})
export class DanhSachNguoiDungComponent implements OnInit {

    listUser: UserInfo[];
    listGroup: Group[];
    userModel: QueryUser;
    page: number;
    totalPage: number;

    searchFilter = {
        Ten: '',
        Email: '',
        SoDienThoai: '',
        Username: '',
        IdGroup: null
    };
  constructor(private userService: UserManagerService) {
      this.listUser = [];
      this.listGroup = [];
      this.userModel = new QueryUser();
      this.userModel.CurrentPage = 1;
      this.userModel.PageSize= 3;
  }

  async ngOnInit() {
    this.getlistUser();

  }


    setItemPerPage(itemPerPage: number) {
      this.userModel.PageSize = itemPerPage;
      this.getlistUser();
    }

    getlistUser() {
          this.userService.getListUser(this.userModel).subscribe(
              result => {
                  console.log(result);
                  this.listUser = result['Data']['UserList'];
                  this.listGroup = result['Data']['Group'];
                  this.totalPage =  result['Data']['Paging']['TotalPages'];
                  this.page = result['Data']['Paging']['CurrentPage'];

              }, error2 => {
                  console.log('Lỗi', error2);
              }
          );
    }


    arrayOne(): any[] {
        return Array(this.totalPage);
    }

    changePage(page: number) {
      this.page= page;
      this.userModel.CurrentPage = this.page;
      this.getlistUser();
    }

    previousPage() {
        this.page--;
        this.userModel.CurrentPage = this.page;
        this.getlistUser();
    }
    nextPage() {
        this.page++;
        this.userModel.CurrentPage = this.page;
        this.getlistUser();
    }


    search() {
        this.userModel.Username = this.searchFilter.Username;
        this.userModel.Email = this.searchFilter.Email;
        this.userModel.Ten = this.searchFilter.Ten;
        this.userModel.SoDienThoai = this.searchFilter.SoDienThoai;
        this.userModel.IdGroup = +this.searchFilter.IdGroup
        console.dir("dfdfd: "+ this.userModel);
        this.getlistUser();
    }
    deleteUser(id: number) {
        console.log("id: "+ id);
        this.userService.deleteUser(id).subscribe(
            result => {
                if (result['IsSuccess'] === true) {
                    this.listUser = this.listUser.filter(value => value.Id !== id);
                } else {
                    alert('Xoá không thành công!');
                }
            },
            error => alert(error)
        )
    }
}
