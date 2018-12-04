import { Component, OnInit } from '@angular/core';
import {DeXuat} from '../../_models/de-xuat';

@Component({
  selector: 'app-hien-thi-de-xuat',
  templateUrl: './hien-thi-de-xuat.component.html',
  styleUrls: ['./hien-thi-de-xuat.component.scss']
})
export class HienThiDeXuatComponent implements OnInit {

    total: number;
    page: number;
    size: number ;
    totalPage: number;
    deXuats: DeXuat[];
  constructor() {
      this.total = 0;
      this.page = 0;
      this.size = 10;
      this.totalPage = 0;
      this.deXuats = [
          {
              loaiDeXuat: 'Mua tài sản',
              tenPhongBan: 'Phong ban 1',
              tenDeXuat: 'Đề xuất 1',
              nam: 2018,
              lyDo: 'lý do 1',
              ngayHoanThanh: new Date(),
              trangThai: 1
          }
      ]
  }

  ngOnInit() {
  }

    setItemPerPage(itemPerPage: number) {
        this.size = itemPerPage;
        this.page = 0;
    }
    arrayOne(): any[] {
        return Array(this.totalPage);
    }
}
