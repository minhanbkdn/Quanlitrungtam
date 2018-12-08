import {Component, OnInit} from '@angular/core';
import {DangKyHoc} from '../../_models/dang-ky-hoc';
import {KhoaHocHienThi} from '../../_models/khoa-hoc-hien-thi';
import {TrangThaiDangKy} from '../../_models/trang-thai-dang-ky';

@Component({
    selector: 'app-danh-sach-dang-ky-hoc',
    templateUrl: './danh-sach-dang-ky-hoc.component.html',
    styleUrls: ['./danh-sach-dang-ky-hoc.component.scss']
})
export class DanhSachDangKyHocComponent implements OnInit {
    keHoachs: DangKyHoc[] = [];
    tinhTrangs: TrangThaiDangKy[] = [];
    khoaHocs: KhoaHocHienThi[] = [];

    total: number;
    page: number;
    size: number;
    totalPage: number;
    idTrangThai: number;

    searchFilter = {
        tenKeHoach: '',
        loaiKeHoach: '',
        donVi: '',
        nam: '',
        namHoc: ''
    };

    constructor() {
    }

    ngOnInit() {
    }

    getKeHoachs(): void {

    }

    setItemPerPage(itemPerPage: number) {
        this.size = itemPerPage;
        this.page = 0;
        this.getKeHoachs();
    }

    arrayOne(): any[] {
        return Array(this.totalPage);
    }

    changePage(page: number) {
        this.page = page - 1;
        this.getKeHoachs();
    }

    previousPage() {
        this.page--;
        this.getKeHoachs();
    }

    nextPage() {
        this.page++;
        this.getKeHoachs();
    }


}
