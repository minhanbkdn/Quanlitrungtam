import {Component, isDevMode, OnInit} from '@angular/core';
import {TaiSan} from '../../_models/tai-san';
import {TaiSanService} from '../../_services/tai-san.service';
import {DonViTinh} from '../../_models/don-vi-tinh';
import {NhomTaiSan} from '../../_models/nhom-tai-san';
import {PhongBan} from '../../_models/phong-ban';
import {LoaiTaiSan} from '../../_models/loai-tai-san';
import {LibraryService} from '../../_services/library.service';
import {DonVi} from '../../_models/don-vi';

@Component({
  selector: 'app-hien-thi-tai-san',
  templateUrl: './hien-thi-tai-san.component.html',
  styleUrls: ['./hien-thi-tai-san.component.scss']
})
export class HienThiTaiSanComponent implements OnInit {

  taiSans: TaiSan[];
    total: number;
    page: number;
    size: number ;
    totalPage: number;
    loaiTaiSans: LoaiTaiSan[] = [];
    nhomTaiSans: NhomTaiSan[] = [];
    donVis: DonVi[] = [];
    selectedDonVi: DonVi;


    searchFilter = {
        tenTaiSan: '',
        loaiTaiSan: '',
        nhomTaiSan: '',
        phongBan: ''
    };
  constructor(private taiSanService: TaiSanService,
              private libraryService: LibraryService) {
    this.taiSans = [];
      this.total = 0;
      this.page = 0;
      this.size = 10;
      this.totalPage = 0;
      this.selectedDonVi = new DonVi();
  }

  async ngOnInit() {
    this.getTaiSans();

    if (isDevMode()) {
       this.initOnLocal();
    } else {
        this.initOnServerDemo();
    }
  }

  initOnLocal() {
      this.getNhomTaiSans();
      this.getLoaiTaiSans();
      this.getDonViTinhs();
      this.getDonVisVaPhongBans();
  }

  initOnServerDemo() {
      this.loaiTaiSans = [
          {
              id: 1,
              ten: 'Tài sản cố định',
              ma: '',
              child: []
          },
          {
              id: 2,
              ten: 'Thiết bị thực hành',
              ma: '',
              child: []
          }
      ];
      this.nhomTaiSans = [
          {
              id: 1,
              ten: 'CPU',
              ma: 'ABC',
              child: []
          },
          {
              id: 2,
              ten: 'Màn hình',
              ma: 'XYZ',
              child: []
          },
          {
              id: 3,
              ten: 'Bàn ghế',
              ma: 'GHI',
              child: []
          }
      ];
      this.donVis = [
          {
              id: 1,
              ten: 'Chiếc',
              ma: '',
              child: []
          },
          {
              id: 2,
              ten: 'Cái',
              ma: '',
              child: []
          }
      ];

      this.donVis = [
          {
              id: 1,
              ten: 'Khoa CNTT',
              ma: 'ABC',
              child: [
                  {
                      id: 1,
                      ten: 'Văn phòng khoa',
                      ma: 'ABC',
                      child: []
                  },
                  {
                      id: 2,
                      ten: 'Phòng nước',
                      ma: 'ABC',
                      child: []
                  }
              ]
          },
          {
              id: 2,
              ten: 'Khoa ĐTVT',
              ma: 'ABC',
              child: [
                  {
                      id: 3,
                      ten: 'Văn phòng cô',
                      ma: 'ABC',
                      child: []
                  },
                  {
                      id: 4,
                      ten: 'Phòng nước',
                      ma: 'ABC',
                      child: []
                  }
              ]
          }
      ];
      this.selectedDonVi = this.donVis[0];
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
                // this.donViTinh = result['result'];
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


    setItemPerPage(itemPerPage: number) {
      this.size = itemPerPage;
      this.page = 0;
      this.getTaiSans();
    }

    getTaiSans() {
        if (isDevMode()) {
            this.taiSanService.getAllFromApi(this.page, this.size).subscribe(
                result => {

                    if (result['errorCode'] === 0) {
                        this.taiSans = result['result']['items'];
                        this.total = result['result']['totals'];
                        this.totalPage =  Math.ceil(this.total / this.size) ;
                    } else {
                        alert('lỗi 2');
                    }
                }, error2 => {
                    console.log('Lỗi', error2);
                }
            );
        } else {
            this.taiSanService.getAll(this.page, this.size).subscribe(
                result => {
                    if (result['errorCode'] === undefined) {
                        this.taiSans = result['result'];
                        this.total = result['totals'];
                        this.totalPage =  Math.ceil(this.total / this.size) ;
                    } else {
                        alert('lỗi');
                    }
                }, error2 => {
                    alert('Lỗi');
                }
            );
        }
    }


    arrayOne(): any[] {
        return Array(this.totalPage);
    }

    changePage(page: number) {
      this.page = page - 1;
      this.getTaiSans();
    }

    previousPage() {
        this.page--;
        this.getTaiSans();
    }
    nextPage() {
        this.page++;
        this.getTaiSans();
    }

    updateSelectedDonVi(idDonVi: number) {
      this.selectedDonVi = this.donVis.find(dv => +dv.id === +idDonVi);
    }
}
