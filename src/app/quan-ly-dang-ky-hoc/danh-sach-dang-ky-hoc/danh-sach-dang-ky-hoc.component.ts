import {Component, OnInit} from '@angular/core';
import {DangKyHoc} from '../../_models/dang-ky-hoc';
import {KhoaHocHienThi} from '../../_models/khoa-hoc-hien-thi';
import {TrangThaiDangKy} from '../../_models/trang-thai-dang-ky';
import {DangKyHocService} from '../../_services/dang-ky-hoc.service';

@Component({
    selector: 'app-danh-sach-dang-ky-hoc',
    templateUrl: './danh-sach-dang-ky-hoc.component.html',
    styleUrls: ['./danh-sach-dang-ky-hoc.component.scss']
})
export class DanhSachDangKyHocComponent implements OnInit {
    dangKyHocs: DangKyHoc[] = [];
    tinhTrangs: TrangThaiDangKy[] = [];
    khoaHocs: KhoaHocHienThi[] = [];

    totalPage: number;

    condition = {
        KeySearch: '',
        IdTrangThai: 0,
        CurrentPage: 1,
        PageSize: 10,
        IdKhoaHoc: 0
    };

    constructor(private dangKyHocService: DangKyHocService) {
    }

    async ngOnInit() {
        this.getDangKyHocs();
        this.getLibraries();
    }

    getLibraries(): void {
        this.dangKyHocService.getDangKyHocs(this.condition).subscribe(
            result => {
                if (result['IsSuccess'] === true) {
                    this.khoaHocs = result['Data']['CacKhoaHoc'];
                    this.tinhTrangs = result['Data']['CacTrangThaiDangKy'];
                } else {
                    alert('Not IsSuccess!');
                }
            },
            error => alert(error)
        )
    }

    getDangKyHocs(): void {
        this.dangKyHocService.getDangKyHocs(this.condition).subscribe(
            result => {
                if (result['IsSuccess'] === true) {
                    this.dangKyHocs = result['Data']['CourseRegistrationList'];
                    this.totalPage = result['Data']['Paging']['TotalPages'];
                    this.condition = result['Data']['Condition'];
                } else {
                    alert('Not IsSuccess!');
                }
            },
            error => alert(error)
        )
    }

    changeState(dangKyHoc: DangKyHoc) {
        this.dangKyHocService.changeStateDangKyHoc({id: dangKyHoc.Id, idTrangThai: dangKyHoc.TrangThaiDangKy}).subscribe(
            result => {
                if (result['IsSuccess'] === true) {
                    this.dangKyHocs.forEach(value => {
                        if (value.Id === dangKyHoc.Id) {
                            value.TrangThaiDangKy = result['Data'];
                        }
                    });
                } else {
                    this.dangKyHocs.forEach(value => {
                        if (value.Id === dangKyHoc.Id) {
                            value.TrangThaiDangKy = result['Data'];
                        }
                    });
                }
            },
            error => alert(error)
        )
    }

    deleteDangKyHoc(id: number) {
        this.dangKyHocService.deleteDangKyHoc(id).subscribe(
            result => {
                if (result['IsSuccess'] === true) {
                    this.dangKyHocs = this.dangKyHocs.filter(value => value.Id !== id);
                } else {
                    alert('Xoá không thành công!');
                }
            },
            error => alert(error)
        )
    }

    setItemPerPage() {
        this.condition.CurrentPage = 1;
        this.getDangKyHocs();
    }

    arrayOne(): any[] {
        return Array(this.totalPage);
    }

    changePage(page: number) {
        this.condition.CurrentPage = page;
        this.getDangKyHocs();
    }

    previousPage() {
        this.condition.CurrentPage--;
        this.getDangKyHocs();
    }

    nextPage() {
        this.condition.CurrentPage++;
        this.getDangKyHocs();
    }


}
