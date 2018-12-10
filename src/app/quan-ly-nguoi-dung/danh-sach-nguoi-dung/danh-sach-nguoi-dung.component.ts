import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../_models/userinfo.model';
import { UserManagerService } from 'app/_services/user-manager-service';
import { QueryUser } from 'app/_models/queryuser.model';
import { Group } from 'app/_models/group.model';
import { GroupService } from 'app/_services/group.service';

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
        UserName: '',
        IdGroup: null,
        PageSize: 10,
        CurrentPage: 1
    };
    constructor(
        private userService: UserManagerService,
        private groupService: GroupService
    ) {
        this.groupService.getListGroup(null);
        console.log("listGroup: "+ this.listGroup);
    }

    async ngOnInit() {
        this.getlistUser();
    }


 

    getlistUser() {
        this.userService.getListUser(this.searchFilter).subscribe(
            result => {
                console.log(result);
                this.listUser = result['Data']['UserList'];
                this.listGroup = result['Data']['Group'];
                this.totalPage = result['Data']['Paging']['TotalPages'];
                this.searchFilter = result['Data']['Condition'];

            }, error2 => {
                console.log('Lỗi', error2);
            }
        );
    }


    setItemPerPage() {
        this.searchFilter.CurrentPage = 1;
        this.getlistUser();
    }

    arrayOne(): any[] {
        return Array(this.totalPage);
    }

    changePage(page: number) {
        this.searchFilter.CurrentPage = page;
        this.getlistUser();
    }

    previousPage() {
        this.searchFilter.CurrentPage--;
        this.getlistUser();
    }
    nextPage() {
        this.searchFilter.CurrentPage++;
        this.getlistUser();
    }



    deleteUser(id: number) {
        console.log("id: " + id);
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

    getListGroup() {
        this.groupService.getListGroup(null).subscribe(
            result => {
                this.listGroup = result['Data']['GroupList'];
            }
        )
    }


}
