import { Component, OnInit } from '@angular/core';
import {NhomTaiSanService} from '../../_services/nhom-tai-san.service';
import {NhomTaiSan} from '../../_models/nhom-tai-san';

@Component({
  selector: 'app-hien-thi-nhom-tai-san',
  templateUrl: './hien-thi-nhom-tai-san.component.html',
  styleUrls: ['./hien-thi-nhom-tai-san.component.scss']
})
export class HienThiNhomTaiSanComponent implements OnInit {
  nhomTaiSan: NhomTaiSan[];

  constructor(private nhomTaiSanService: NhomTaiSanService) {
    this.nhomTaiSan = [];
  }

  ngOnInit() {
      this.nhomTaiSanService.getAll().subscribe(
          result => {
              this.nhomTaiSan = result.result;
          },
          error2 => {
              alert('Get nhom tai san error !!')
          }
      )
  }

}
