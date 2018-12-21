import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KhoaHoc } from 'app/_models/khoahoc.model';
import { KhoahocService } from 'app/_services/khoahoc.service';
import { SharingService } from 'app/_services/sharing.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GiaoVien } from 'app/_models/giao-vien';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-sua-khoa-hoc',
  templateUrl: './sua-khoa-hoc.component.html',
  styleUrls: ['./sua-khoa-hoc.component.scss']
})
export class SuaKhoaHocComponent implements OnInit {


  formSuaKhoaHoc: FormGroup;
  khoaHocInfo: KhoaHoc;
  listGiangVien: GiaoVien[] = []

  constructor(
    private khoahocService: KhoahocService,
    private sharingService: SharingService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dataPipe: DatePipe
  ) {
    this.getListGiangvien();
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.khoahocService.getById(id).subscribe(
      result => {
        this.khoaHocInfo = result['Data'];
        console.log("data : "+ this.khoaHocInfo.TenKhoaHoc);
        this.formSuaKhoaHoc = this.fb.group({
          BeautyId: [this.khoaHocInfo.BeautyId, Validators.required],
          TenKhoaHoc: [this.khoaHocInfo.TenKhoaHoc, Validators.required],
          AnhMinhHoa: ["https://all.ie/wp-content/uploads/2015/09/Evening_English_1-1150x647.jpg"],
          NgayKhaiGiang: [this.transform(this.khoaHocInfo.NgayKhaiGiang),Validators.required],
          HocPhi: [this.khoaHocInfo.HocPhi,Validators.required],
          ThoiGianBatDau: [this.transform(this.khoaHocInfo.ThoiGianBatDau),Validators.required],
          ThoiGianKetThuc: [this.transform(this.khoaHocInfo.ThoiGianKetThuc),Validators.required],
          IdGiangVienDungLop: [this.khoaHocInfo.IdGiangVienDungLop,Validators.required],
          ChoPhepDangKy: [this.khoaHocInfo.ChoPhepDangKy, Validators.required],
          HienThi: [this.khoaHocInfo.HienThi, Validators.required],
          TomTat: [this.khoaHocInfo.TomTat, Validators.required],
          ChiTiet: [this.khoaHocInfo.ChiTiet, Validators.required],
          LichHoc: [this.khoaHocInfo.LichHoc, Validators.required],
          Id: [id]     
        })
      },
      error => {
        alert(error);
      }
    )
  }

  onSubmit(){
    console.log("ok:" + this.formSuaKhoaHoc.value);
    this.khoahocService.edit(this.formSuaKhoaHoc.value).subscribe(
      result => {
        if(result['IsSuccess'] === true) {
          this.sharingService.notifInfo("Sửa khoá học thành công");
          this.router.navigate(['/khoa-hoc']);
        } else {
          this.sharingService.notifError('Sửa khoá học thất bại');
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

  transform(date):any {
    return this.dataPipe.transform(date, 'yyyy-MM-dd');
  }

}
