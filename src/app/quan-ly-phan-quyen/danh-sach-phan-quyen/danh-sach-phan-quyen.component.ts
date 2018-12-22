import {Component, OnInit} from '@angular/core';
import {GroupModel} from '../../_models/group-model';
import {PermissionService} from '../../_services/permission.service';
import {Screen} from '../../_models/screen';

@Component({
    selector: 'app-danh-sach-phan-quyen',
    templateUrl: './danh-sach-phan-quyen.component.html',
    styleUrls: ['./danh-sach-phan-quyen.component.scss']
})
export class DanhSachPhanQuyenComponent implements OnInit {
    cacManHinh: Screen[];
    groups: GroupModel[];
    idGroup: number;

    constructor(private permissionService: PermissionService) {
        this.idGroup = 2;
        this.cacManHinh = [];
        this.groups = [];
    }

    ngOnInit() {
        this.getGroupInit();
    }

    getGroupInit() {
        this.permissionService.getPermissions(this.idGroup).subscribe(
            result => {
                if (result['IsSuccess'] === true) {
                    this.groups = result['Data']['ListGroup'];
                    this.cacManHinh = result['Data']['cacManHinh'];
                }
            },
            error1 => console.log(error1)
        )
    }
    getPermission() {
        this.permissionService.getPermissions(this.idGroup).subscribe(
            result => {
                console.log(result);
                if (result['IsSuccess'] === true) {
                    this.cacManHinh = result['Data']['cacManHinh'];
                }
            },
            error1 => console.log(error1)
        )
    }


    changePermission(id: number) {
        this.permissionService.updatePermission(id).subscribe(
            result => {

            },
            error1 => console.log(error1)
        )
    }


}
