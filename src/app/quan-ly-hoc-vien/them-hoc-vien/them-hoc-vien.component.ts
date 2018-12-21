import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KhoaHoc } from 'app/_models/khoahoc.model';
import { KhoahocService } from 'app/_services/khoahoc.service';
import { QuanlihocService } from 'app/_services/quanlihoc.service';
import { SharingService } from 'app/_services/sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-them-hoc-vien',
  templateUrl: './them-hoc-vien.component.html',
  styleUrls: ['./them-hoc-vien.component.scss']
})
export class ThemHocVienComponent implements OnInit {


  formAddHocVien: FormGroup;
  listKhoaHoc: KhoaHoc[] = [];

  constructor(
    private khoahocService: KhoahocService,
    private quanlihocService: QuanlihocService,
    private sharingService: SharingService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.getListKhoaHoc();
  }

  ngOnInit() {
    this.formAddHocVien = this.fb.group({
      Ho: ['', Validators.required],
      Ten: ['', Validators.required],
      Email: ['', Validators.required],
      SoDienThoai: ['',Validators.required],
      DaNopTien: [false, Validators.required],
      SoTietDaHoc: ['0'],
      IdKhoaHoc: [Validators.required]

    })
  }

  onSubmit() {
    this.quanlihocService.add(this.formAddHocVien.value).subscribe(
      result => {
        if(result['IsSuccess'] === true) {
          this.sharingService.notifInfo("Thêm học viên vào khoá học thành công");
          this.router.navigate(['/khoa-hoc']);
        } else {
          this.sharingService.notifError('Thêm học viên vào khoá học thất bại');
        }
      }, error => {
        this.sharingService.notifError(error);
      }
    )
  }

  getListKhoaHoc() {
    this.khoahocService.getListKhoaHoc(null).subscribe(
      result => {
        this.listKhoaHoc = result['Data']['CourseList'];
      },
      error => {
        alert(error);
      }
    )
  }
}
