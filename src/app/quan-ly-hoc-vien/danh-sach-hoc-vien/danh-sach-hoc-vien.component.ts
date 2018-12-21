import { Component, OnInit } from '@angular/core';
import { HocVien } from 'app/_models/hocvien.model';
import { QuanlihocService } from 'app/_services/quanlihoc.service';
import { SharingService } from 'app/_services/sharing.service';
import { KhoaHoc } from 'app/_models/khoahoc.model';
import { KhoahocService } from 'app/_services/khoahoc.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-danh-sach-hoc-vien',
  templateUrl: './danh-sach-hoc-vien.component.html',
  styleUrls: ['./danh-sach-hoc-vien.component.scss']
})
export class DanhSachHocVienComponent implements OnInit {

  listHocVien: HocVien[] = [];
  listKhoaHoc: KhoaHoc[] = [];
  totalPage: number;

  condition = {
    KeySearch: '',
    IdKhoaHoc: 0,
    CurrentPage: 1,
    PageSize: 10,
  }

  constructor(
    private quanlihocService: QuanlihocService,
    private sharingService: SharingService,
    private khoahocService: KhoahocService
  ) {
    this.getListKhoaHoc();
  }


  ngOnInit() {
    
    this.getHocVien();
  }

  getHocVien() {
    this.quanlihocService.getListHocVien(this.condition).subscribe(
      result => {
        if (result['IsSuccess'] === true) {
          this.listHocVien = result['Data']['StudentList'];
          this.totalPage = result['Data']['Paging']['TotalPages'];
          this.condition = result['Data']['Condition'];
        } else {
          alert("Get hoc vien that bai");
        }
      },
      error => {
        alert(error);
      }
    )
  }


  getListKhoaHoc() {
    return this.khoahocService.getListKhoaHoc(null).toPromise().then(
      result => {
        this.listKhoaHoc = result['Data']['CourseList'];
        console.log(this.listKhoaHoc);
      },
      error => {
        alert(error);
      }
    )
  }

  delete(id: number) {
    this.quanlihocService.delete(id).subscribe(
      result => {
        if(result['IsSuccess'] === true){
          this.sharingService.notifInfo('Xoá học viên thành công');
          this.listHocVien = this.listHocVien.filter(x => x.Id !== id);
        }else{
          this.sharingService.notifError(result['MsgError']);
      }
    },
    error => {
      alert(error);
    }
    )

  } 

  setItemPerPage() {
    this.condition.CurrentPage = 1;
    this.getHocVien();
  }

  arrayOne(): any[] {
    return Array(this.totalPage);
  }

  changePage(page: number) {
    this.condition.CurrentPage = page;
    this.getHocVien();
  }

  previousPage() {
    this.condition.CurrentPage--;
    this.getHocVien();
  }

  nextPage() {
    this.condition.CurrentPage++;
    this.getHocVien();
  }

}
