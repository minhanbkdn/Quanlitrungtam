import {Component, isDevMode, OnInit} from '@angular/core';
import {KeHoach} from '../../_models/ke-hoach';
import {KeHoachService} from '../../_services/ke-hoach.service';
import {LibraryService} from '../../_services/library.service';
import {LoaiKeHoach} from '../../_models/loai-ke-hoach';
import {DonVi} from '../../_models/don-vi';

@Component({
    selector: 'app-hien-thi-ke-hoach',
    templateUrl: './hien-thi-ke-hoach.component.html',
    styleUrls: ['./hien-thi-ke-hoach.component.scss']
})
export class HienThiKeHoachComponent implements OnInit {
    keHoachs: KeHoach[] = [];
    donVis: DonVi[] = [];
    loaiKeHoach: LoaiKeHoach[] = [];
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

    constructor(private keHoachService: KeHoachService, private libraryService: LibraryService) {
        this.total = 0;
        this.page = 0;
        this.size = 10;
        this.totalPage = 0;
        this.idTrangThai = 2;
    }

    ngOnInit() {
        this.getLibrary();
        this.getKeHoachs();
    }

    getLibrary() {
        this.libraryService.getLoaiKeHoachs().subscribe(
            value => this.loaiKeHoach = value['result'],
            error => alert('Lỗi')
        );
        this.libraryService.getDonVis().subscribe(
            value => this.donVis = value['result'],
            error => alert('Lỗi')
        );
    }

    getKeHoachs() {
        if (isDevMode()) {
            this.keHoachService.getAllFromApi(this.page, this.size).subscribe(
                result => {
                    if (result['errorCode'] === 0) {
                        this.keHoachs = result['result']['items'];
                        this.total = result['result']['totals'];
                        this.totalPage = Math.ceil(this.total / this.size);
                    } else {
                        alert('lỗi');
                    }
                }, error2 => {
                    alert('Lỗi');
                }
            );
        } else {
            this.keHoachService.getAll(this.page, this.size).subscribe(
                result => {
                    if (result['errorCode'] === undefined) {
                        this.keHoachs = result['result'];
                        this.total = result['totals'];
                        this.totalPage = Math.ceil(this.total / this.size);
                    } else {
                        alert('lỗi');
                    }
                }, error2 => {
                    alert('Lỗi');
                }
            );
        }
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

    duyetKeHoach(id: number) {
        const keHoachDuyet = {'Id': id, 'IdTrangThai': this.idTrangThai};
        this.keHoachService.duyetKeHoach(keHoachDuyet).subscribe(
            value => {
                if (value['errorCode'] === 0) {
                    alert('Success');
                } else {
                    alert(value['errorMessage']);
                }
            },
            error1 => alert('lỗi')
        );
    }
}
