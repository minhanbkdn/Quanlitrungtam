import { Injectable } from '@angular/core';
import {GiaoVien} from '../_models/giao-vien';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL, httpOptions, API_HOME} from '../_constants/constants';
import index from '@angular/cli/lib/cli';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GiaoVienService {

    private giaovienURL = API_HOME;
    listGV: GiaoVien[] = [];


    constructor(private http: HttpClient) {
    }

    getAllFromApi(page: number, size: number): Observable<any> {
        const url = `${this.giaovienURL}/get-giang-vien`;
        return this.http.get(url);
    }

    getListGV(): Observable<GiaoVien[]> {
        const url = `${this.giaovienURL}/get-giang-vien`;
        return this.http.get<GiaoVien[]>(url)
                .pipe(
                );

    
    }
    getById(id: number): Observable<any> {
        const url = `${this.giaovienURL}/${id}`;
        return this.http.get(url);
    }

    add(newGV: GiaoVien): Observable<any> {
        const url = this.giaovienURL;
        return this.http.post(url, GiaoVien, httpOptions);
    }

    edit(newGV: GiaoVien): Observable<any> {
        const url = `${this.giaovienURL}/${newGV.IdUser}`;
        return this.http.put(url, newGV, httpOptions);
    }
}
