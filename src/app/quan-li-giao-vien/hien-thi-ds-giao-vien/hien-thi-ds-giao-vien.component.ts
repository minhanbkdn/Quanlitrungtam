import { Component, OnInit, isDevMode } from '@angular/core';
import {GiaoVien} from '../../_models/giao-vien';
import {GiaoVienService} from '../../_services/giao-vien-service';

@Component({
  selector: 'app-hien-thi-ds-giao-vien',
  templateUrl: './hien-thi-ds-giao-vien.component.html',
  styleUrls: ['./hien-thi-ds-giao-vien.component.scss']
})
export class HienThiDsGiaoVienComponent implements OnInit {
  listGV: GiaoVien[];
    total: number;
    page: number;
    size: number ;
    totalPage: number;

    searchFilter = {
        tenTaiSan: '',
        loaiTaiSan: '',
        nhomTaiSan: '',
        phongBan: ''
    };
  constructor(private giaovienService: GiaoVienService) {
    this.listGV = [];
      this.total = 0;
      this.page = 0;
      this.size = 10;
      this.totalPage = 0;
  }

  async ngOnInit() {
    this.getlistGV();

    if (isDevMode()) {
       this.initOnLocal();
    } else {
        this.initOnServerDemo();
    }
  }

  initOnLocal() {
  }

  initOnServerDemo() {

  }

    setItemPerPage(itemPerPage: number) {
      this.size = itemPerPage;
      this.page = 0;
      this.getlistGV();
    }

    getlistGV() {
        if (isDevMode()) {
            this.giaovienService.getListGV().subscribe(
                result => {
                    console.log(result);
                    this.listGV = result;
                }, error2 => {
                    console.log('Lỗi', error2);
                }
            );
        } else {
            this.giaovienService.getAllFromApi(this.page, this.size).subscribe(
                result => {
                    if (result['errorCode'] === undefined) {
                        this.listGV = result['result'];
                        this.total = result['totals'];
                        this.totalPage =  Math.ceil(this.total / this.size) ;
                    } else {
                        alert('lỗi');
                    }
                }, error2 => {
                    alert('Lỗi');
                }
            );
        }
    }


    arrayOne(): any[] {
        return Array(this.totalPage);
    }

    changePage(page: number) {
      this.page = page - 1;
      this.getlistGV();
    }

    previousPage() {
        this.page--;
        this.getlistGV();
    }
    nextPage() {
        this.page++;
        this.getlistGV();
    }
}
