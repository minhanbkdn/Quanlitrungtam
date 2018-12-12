import { Component, OnInit } from '@angular/core';
import { KhoaHoc } from 'app/_models/khoahoc.model';
import { KhoahocService } from 'app/_services/khoahoc.service';

@Component({
  selector: 'app-danh-sach-khoa-hoc',
  templateUrl: './danh-sach-khoa-hoc.component.html',
  styleUrls: ['./danh-sach-khoa-hoc.component.scss']
})
export class DanhSachKhoaHocComponent implements OnInit {

  totalPage: number;
  currentPage: number;
  conditions = {
    KeySearch : '',
    CurrentPage: 1,
    PageSize: 10
  }

  listKhoaHoc: KhoaHoc[];
  constructor(
    private khoaHocService: KhoahocService,
  ) { }

  ngOnInit() {
    this.getListKhoaHoc();
  }

  getListKhoaHoc(): void {
    this.khoaHocService.getListKhoaHoc(this.conditions).subscribe(
      result => {
        if(result['IsSuccess'] === true) {
          this.listKhoaHoc = result['Data']['CourseList'];
          this.totalPage   = result['Data']['Paging']['TotalPages'];
          this.conditions  = result['Data']['Condition'];
          this.currentPage = this.conditions.CurrentPage;
        }else{
          alert('Get list khoa hoc fails');
        }

      },
      error => {
        alert(error);
      }
    )
  }  

  setItemPerPage() {
    this.currentPage = 1;
    this.getListKhoaHoc();
  }

  arrayOne(): any[] {
    return Array(this.totalPage);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.conditions.CurrentPage = page;
    this.getListKhoaHoc();
  }

  previousPage() {
    this.currentPage--;
    this.conditions.CurrentPage = this.currentPage;
    this.getListKhoaHoc();
  }

  nextPage() {
    this.currentPage++;
    this.conditions.CurrentPage = this.currentPage;
    this.getListKhoaHoc();
  }

}
