import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
      Email: ['', [Validators.required, this.gmailValidator]],
      SoDienThoai: ['',[Validators.required, Validators.pattern("^[0-9]{9,11}$")]],
      DaNopTien: [false, Validators.required],
      SoTietDaHoc: ['',Validators.pattern("^[0-9]{1,2}$")],
      IdKhoaHoc: [Validators.required]

    })
  }

  onSubmit() {
    this.quanlihocService.add(this.formAddHocVien.value).subscribe(
      result => {
        if(result['IsSuccess'] === true) {
          this.sharingService.notifInfo("Thêm học viên vào khoá học thành công");
          this.router.navigate(['/hoc-vien']);
        } else {
          this.sharingService.notifError(result['MsgError']);
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

  gmailValidator(formControl: FormControl) {
    if(formControl.value.includes('@gmail.com')){
      return null;
    }
    return {gmail: true};
  }
}
