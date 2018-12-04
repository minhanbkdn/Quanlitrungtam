import { Component, OnInit } from '@angular/core';
import {TaiSanV2} from '../../_models/tai-san-v2';
import {LoaiTaiSan} from '../../_models/loai-tai-san';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {DonViTinh} from '../../_models/don-vi-tinh';
import {PhongBan} from '../../_models/phong-ban';
import {DonVi} from '../../_models/don-vi';
import {TaiSanService} from '../../_services/tai-san.service';
import {LibraryService} from '../../_services/library.service';
import {SharingService} from '../../_services/sharing.service';
import {TaiSanCuThe} from '../../_models/tai-san-cu-the';
import {Router} from '@angular/router';

@Component({
  selector: 'app-them-tai-san',
  templateUrl: './them-tai-san.component.html',
  styleUrls: ['./them-tai-san.component.scss']
})
export class ThemTaiSanComponent implements OnInit {

  newTaiSan: TaiSanV2;
  loaiTaiSans: LoaiTaiSan[] = [];
  nhomTaiSans: NhomTaiSan[] = [];
  donViTinhs: DonViTinh[] = [];
  donVis: DonVi[] = [];
  selectedDonVi: DonVi;
    saveClicked = false;
    constructor(private taiSanService: TaiSanService,
                private libraryService: LibraryService,
                private sharingService: SharingService,
                private router: Router) {
    this.newTaiSan = {
        id: 0,
        idLoaiTaiSan: 0,
        idNhomTaiSan: 0,
        idDonViTinh: 0,
        idPhongBan: 0,
        maTaiSan: '',
        maThietBi: '',
        tenTaiSan: '',
        namSuDung: new Date(),
        thongSoKyThuat: '',
        taiSanCuThe: []
    }
    this.selectedDonVi = new DonVi();
  }

  ngOnInit() {
        this.initOnLocal();
  }


    initOnLocal() {
        this.getNhomTaiSans();
        this.getLoaiTaiSans();
        this.getDonViTinhs();
        this.getDonVisVaPhongBans();
    }


  addTaiSanCuThe(soluong: number) {
      this.newTaiSan.taiSanCuThe = [];
    for (let i = 1; i <= soluong; i++) {
      this.newTaiSan.taiSanCuThe.push(
          {
              id: 0,
              idTaiSan: this.newTaiSan.id,
              maTaiSan: '',
              maThietBi: '',
              tenTaiSan: this.newTaiSan.tenTaiSan,
              namSuDung: this.newTaiSan.namSuDung,
              thongSoKyThuat: '',
              tyLeChatLuong: 0,
              tinhTrang: 0,
              ghiChu: ''
          }
      )
    }
  }

  removeTSCT(i: number) {
    this.newTaiSan.taiSanCuThe.splice(i - 1, 1);
  }

    luuTS() {
        this.saveClicked = true;
      if (this.validate()) {
          this.taiSanService.add(this.newTaiSan).subscribe(
              result => {
                  if (+result['errorCode'] === 0) {
                      this.sharingService.notifInfo('Thêm tài sản thành công');
                      this.router.navigate(['/tai-san']);
                  } else {
                      this.sharingService.notifError('Thêm tài sản thất bại: ' + result['errorMessage']);
                  }
              }, error2 => {
                  this.sharingService.notifError('Thêm tài sản thất bại: ' + error2['errorMessage']);
              }
          )
      } else {
          this.sharingService.notifError('Vui lòng xem lại dữ liệu!');
      }
    }

    getNhomTaiSans() {
        this.libraryService.getNhomTaiSans().subscribe(
            result => {
                this.nhomTaiSans = result['result'];
            }, error2 => {
                alert('Khong the fetch nhom tai san');
            }
        );
    }

    getLoaiTaiSans() {
        this.libraryService.getLoaiTaiSans().subscribe(
            result => {
                this.loaiTaiSans = result['result'];
            }, error2 => {
                alert('Khong the fetch loai tai san');
            }
        );
    }

    getDonViTinhs() {
        this.libraryService.getDonViTinhs().subscribe(
            result => {
                this.donViTinhs = result['result'];
            }, error2 => {
                alert('Khong the fetch don vi tinh');
            }
        );
    }

    getDonVisVaPhongBans() {
        this.libraryService.getDonVisVaPhongBans().subscribe(
            result => {
                this.donVis = result['result'];
                this.selectedDonVi = this.donVis[0];
            }, error2 => {
                alert('Khong the fetch don vi tinh');
            }
        );
    }

    updateSelectedDonVi(idDonVi: number) {
        this.selectedDonVi = this.donVis.find(dv => +dv.id === +idDonVi);
    }

    validate(): boolean {
        return this.newTaiSan.tenTaiSan !== ''
            && +this.newTaiSan.idPhongBan !== 0
            && +this.newTaiSan.idDonViTinh !== 0
            && +this.newTaiSan.idLoaiTaiSan !== 0
            && +this.newTaiSan.idNhomTaiSan !== 0
            && this.newTaiSan.maTaiSan !== ''
            && this.newTaiSan.maThietBi !== ''
            && this.newTaiSan.thongSoKyThuat !== ''
    }
}
