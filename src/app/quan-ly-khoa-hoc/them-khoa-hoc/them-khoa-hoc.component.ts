import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KhoahocService } from 'app/_services/khoahoc.service';
import { SharingService } from 'app/_services/sharing.service';
import { Router } from '@angular/router';
import { GiaoVien } from 'app/_models/giao-vien';

@Component({
  selector: 'app-them-khoa-hoc',
  templateUrl: './them-khoa-hoc.component.html',
  styleUrls: ['./them-khoa-hoc.component.scss']
})
export class ThemKhoaHocComponent implements OnInit {

  formAddKhoaHoc: FormGroup;
  listGiangVien: GiaoVien[] = []

  constructor(
    private khoahocService: KhoahocService,
    private sharingService: SharingService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.getListGiangvien();
  }

  ngOnInit() {
    this.formAddKhoaHoc = this.fb.group({
      BeautyId: ['', Validators.required],
      TenKhoaHoc: ['', Validators.required],
      AnhMinhHoa: ["https://all.ie/wp-content/uploads/2015/09/Evening_English_1-1150x647.jpg"],
      NgayKhaiGiang: ['', Validators.required],
      HocPhi: ['', [Validators.required, Validators.pattern("^[0-9]{1,9}$"), Validators.minLength(2)]],
      ThoiGianBatDau: ['',Validators.required],
      ThoiGianKetThuc: ['',Validators.required],
      IdGiangVienDungLop: [Validators.required],
      ChoPhepDangKy: [true, Validators.required],
      HienThi: [true, Validators.required],
      TomTat: ['', Validators.required],
      ChiTiet: ['', Validators.required],
      LichHoc: ['', Validators.required]
    }, {
        Validators: this.dateLessThan('ThoiGianBatDau', 'ThoiGianKetThuc')
      }
    )
  }

  onSubmit() {
    console.log("ok:" + this.formAddKhoaHoc.value);
    this.khoahocService.add(this.formAddKhoaHoc.value).subscribe(
      result => {
        if (result['IsSuccess'] === true) {
          this.sharingService.notifInfo("Thêm khoá học thành công");
          this.router.navigate(['/khoa-hoc']);
        } else {
          this.sharingService.notifError(result['MsgError']);
        }
      }, error => {
        this.sharingService.notifError(error);
      }
    )
  }

  getListGiangvien() {
    this.khoahocService.getAllGiangVien().subscribe(
      result => {
        this.listGiangVien = result['Data'];
      },
      error => {
        alert(error);
      }
    )
  }

  dateLessThan(from: string, to: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let f = group.controls[from]
      let t = group.controls[to];
      if (f.value > t.value) {
        console.log("dfdfd");
        return {
          dates: "Date from should be less than Date to"
        };
      }
      return {};
    }
  }


}
