import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KhoahocService } from 'app/_services/khoahoc.service';
import { SharingService } from 'app/_services/sharing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-them-khoa-hoc',
  templateUrl: './them-khoa-hoc.component.html',
  styleUrls: ['./them-khoa-hoc.component.scss']
})
export class ThemKhoaHocComponent implements OnInit {

  formAddKhoaHoc: FormGroup

  constructor(
    private khoahocService: KhoahocService,
    private sharingService: SharingService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.formAddKhoaHoc = this.fb.group({
      BeautyId: ['', Validators.required],
      TenKhoaHoc: ['', Validators.required],
      AnhMinhHoa: [],
      NgayKhaiGiang: ['',Validators.required],
      HocPhi: [Validators.required],
      ThoiGianBatDau: [Validators.required],
      ThoiGianKetThuc: [Validators.required],
      IdGiangVienDungLop: [Validators.required],
      ChoPhepDangKy: [true, Validators.required],
      HienThi: [true, Validators.required],
      TomTat: [''],
      ChiTiet: [''],
      LichHoc: ['']     
    })
  }

  onSubmit(){
    console.log(this.formAddKhoaHoc.value);
    this.khoahocService.add(this.formAddKhoaHoc.value).subscribe(
      result => {
        if(result['IsSuccess'] === true) {
          this.sharingService.notifInfo("Thêm khoá học thành công");
          this.router.navigate(['/group']);
        } else {
          this.sharingService.notifError('Thêm group thất bại');
        }
      }, error => {
        this.sharingService.notifError(error);
      }
    )
  }

}
