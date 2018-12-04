import { Injectable } from '@angular/core';
import {TaiSan} from '../_models/tai-san';
import {of} from 'rxjs/index';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL, httpOptions} from '../_constants/constants';
import index from '@angular/cli/lib/cli';
import {TaiSanV2} from '../_models/tai-san-v2';





@Injectable({
  providedIn: 'root'
})
export class TaiSanService {
    private taiSanUrl =  API_URL +  '/taisans';
    taiSans: TaiSan[] = [];


    constructor(private http: HttpClient) {
        let index = 0;
        for (let item of Array(64)) {
            index++;
            this.taiSans.push(
                {
                    id: index,
                    loaiTaiSan: 'Tài sản Cố định',
                    nhomTaiSan: 'CPU',
                    donViTinh: 'Chiếc',
                    maTaiSan: 'TS-0' + index,
                    maThietBi: 'TB-0' + index,
                    namSuDung: new Date(),
                    tenTaiSan: 'CPU Apple',
                    thongSoKyThuat: '2.7 GHz',
                    soluong: Math.floor(Math.random() * 6) + 1
                });
        }
    }

    getAll(page: number, size: number): Observable<any> {

        const  start = +page * +size;
        let end = +start + +size;
        if (end > +this.taiSans.length - 1) {
            end = +this.taiSans.length - 1;
        }
        const result = this.taiSans.slice(start, end);
        return of(
            {
                result: result,
                totals: this.taiSans.length
            }

        );
    }


    getAllFromApi(page: number, size: number): Observable<any> {
        const url = `${this.taiSanUrl}?offset=${page}&limit=${size}`;
        return this.http.get(url);
    }

    getById(id: number): Observable<any> {
        const url = `${this.taiSanUrl}/${id}`;
        return this.http.get(url);
    }

    add(newTaiSan: TaiSanV2): Observable<any> {
        const url = this.taiSanUrl;
        return this.http.post(url, newTaiSan, httpOptions);
    }

    edit(newTaiSan: TaiSanV2): Observable<any> {
        const url = `${this.taiSanUrl}/${newTaiSan.id}`;
        return this.http.put(url, newTaiSan, httpOptions);
    }
}
