import { Injectable } from '@angular/core';
import {GiaoVien} from '../_models/giao-vien';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL, httpOptions, API_HOME} from '../_constants/constants';
import index from '@angular/cli/lib/cli';
import {ApiService} from './api.service'

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { JsonwtService } from './jsonwt.service';
import { UserInfo } from 'app/_models/userinfo.model';



@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

    private userURL = API_HOME;
    listUser: UserInfo[] = [];


    constructor(
        private apiService: ApiService,
        private http: HttpClient,
        private jwtService: JsonwtService
            ) {
    }



    getListUser(body: any): Observable<UserInfo[]> {
        return this.apiService.post('/user/get-list-user',body).pipe(
        )

    }
    getById(id: number): Observable<any> {
        const url = `${this.userURL}/${id}`;
        return this.http.get(url);
    }

    add(newGV: GiaoVien): Observable<any> {
        const url = this.userURL;
        return this.http.post(url, GiaoVien, httpOptions);
    }

    edit(newGV: GiaoVien): Observable<any> {
        const url = `${this.userURL}/${newGV.IdUser}`;
        return this.http.put(url, newGV, httpOptions);
    }
}
