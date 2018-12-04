import { Component, OnInit } from '@angular/core';
import {NhomTaiSanService} from '../../_services/nhom-tai-san.service';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {Router} from '@angular/router';

@Component({
  selector: 'app-them-nhom-tai-san',
  templateUrl: './them-nhom-tai-san.component.html',
  styleUrls: ['./them-nhom-tai-san.component.scss']
})
export class ThemNhomTaiSanComponent implements OnInit {

  nhomTaiSan: NhomTaiSan;
  saveClicked = false;
  constructor(private nhomTaiSanService: NhomTaiSanService, private router: Router) {
    this.nhomTaiSan = {
        id: 0,
        ten: '',
        ma: '',
        child: []
    }
  }

  ngOnInit() {
  }

    addNhomTaiSan(): void {
      this.saveClicked = true;
      if (this.validate()) {
          this.nhomTaiSanService.addNhomTaiSan(this.nhomTaiSan).subscribe(
              result => {
                  if ( result['errorCode'] === 0) {
                      alert('them thanh cong');
                      this.router.navigate(['/nhom-tai-san']);
                  } else {
                      alert('thêm nhóm tài sản thất bại');
                  }
              },
              error2 => {
                alert('thêm nhóm tài sản thất bại');
              }
          );
      } else {
          alert('kiểm tra dữ liệu');
      }

    }
    validate(): boolean {
        return this.nhomTaiSan.ten !== ''
            && this.nhomTaiSan.ma !== ''
    }
}
