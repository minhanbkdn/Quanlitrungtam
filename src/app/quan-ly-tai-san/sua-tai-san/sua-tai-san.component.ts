import { Component, OnInit } from '@angular/core';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {SharingService} from '../../_services/sharing.service';
import {LoaiTaiSan} from '../../_models/loai-tai-san';
import {TaiSanV2} from '../../_models/tai-san-v2';
import {TaiSanService} from '../../_services/tai-san.service';
import {LibraryService} from '../../_services/library.service';
import {DonViTinh} from '../../_models/don-vi-tinh';
import {DonVi} from '../../_models/don-vi';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sua-tai-san',
  templateUrl: './sua-tai-san.component.html',
  styleUrls: ['./sua-tai-san.component.scss']
})
export class SuaTaiSanComponent implements OnInit {

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
                private route: ActivatedRoute,
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
        this.getDonVisVaPhongBans();
        this.getNhomTaiSans();
        this.getLoaiTaiSans();
        this.getDonViTinhs();

        this.getTaiSan();
    }

    getTaiSan() {
      const id = +this.route.snapshot.params.id;
      this.taiSanService.getById(id).subscribe(
          result => {
            this.newTaiSan = result['result'];
            this.selectedDonVi = this.donVis.find(dv => dv.child.find(pb => +pb.id === +this.newTaiSan.idPhongBan) !== undefined);
          }, error2 => {
            this.sharingService.notifError('lỗi: ' + error2['errorMessage']);
          }
      )
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
            this.taiSanService.edit(this.newTaiSan).subscribe(
                result => {
                    if (+result['errorCode'] === 0) {
                        this.sharingService.notifInfo('Sửa tài sản thành công');
                        this.router.navigate(['/tai-san']);
                    } else {
                        this.sharingService.notifError('Sửa tài sản thất bại: ' + result['errorMessage']);
                    }
                }, error2 => {
                    this.sharingService.notifError('Sửa tài sản thất bại: ' + error2['errorMessage']);
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
            && this.newTaiSan.namSuDung.toString() !== ''
            && this.validateTaiSanCuThe();
    }

    validateTaiSanCuThe() {
        for (const item of this.newTaiSan.taiSanCuThe) {
            if (item.maTaiSan === ''
                || item.maThietBi === ''
                || item.thongSoKyThuat === ''
                || item.namSuDung.toString() === '') {
                return false;
            }
        }
        return true;
    }

}
