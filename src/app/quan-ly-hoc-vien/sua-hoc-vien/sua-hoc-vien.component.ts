import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { KhoaHoc } from 'app/_models/khoahoc.model';
import { KhoahocService } from 'app/_services/khoahoc.service';
import { QuanlihocService } from 'app/_services/quanlihoc.service';
import { SharingService } from 'app/_services/sharing.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HocVien } from 'app/_models/hocvien.model';

@Component({
  selector: 'app-sua-hoc-vien',
  templateUrl: './sua-hoc-vien.component.html',
  styleUrls: ['./sua-hoc-vien.component.scss']
})
export class SuaHocVienComponent implements OnInit {

  formAddHocVien: FormGroup;
  listKhoaHoc: KhoaHoc[] = [];
  hocvienInfo: HocVien;

  constructor(
    private khoahocService: KhoahocService,
    private quanlihocService: QuanlihocService,
    private sharingService: SharingService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { 
    this.getListKhoaHoc();
  }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');
    this.quanlihocService.getById(id).subscribe(
      result => {
        this.hocvienInfo = result['Data'];
        console.log("Ten: " + this.hocvienInfo.Ten)
        console.log("Ho: " + this.hocvienInfo.Ho)
        this.formAddHocVien = this.fb.group({
          Ten: [this.hocvienInfo.Ten, Validators.required],
          Ho: [this.hocvienInfo.Ho, Validators.required],
          Email: [this.hocvienInfo.Email, [Validators.required, this.gmailValidator]],
          SoDienThoai: [this.hocvienInfo.SoDienThoai,[Validators.required, Validators.pattern("^[0-9]{9,11}$")]],
          DaNopTien: [this.hocvienInfo.DaNopTien, Validators.required],
          SoTietDaHoc: [this.hocvienInfo.SoTietDaHoc, Validators.pattern("^[0-9]{1,2}$")],
          IdKhoaHoc: [this.hocvienInfo.IdKhoaHoc,Validators.required],
          Id: [id]
        })
      }
    )

  }

  onSubmit() {
    this.quanlihocService.edit(this.formAddHocVien.value).subscribe(
      result => {
        if(result['IsSuccess'] === true) {
          this.sharingService.notifInfo("Sửa  thành công");
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
