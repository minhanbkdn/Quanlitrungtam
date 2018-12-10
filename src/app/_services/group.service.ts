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
import { AddUser } from 'app/_models/add-user.model';
import { Group } from 'app/_models/group.model';



@Injectable({
  providedIn: 'root'
})
export class GroupService {
    

    private userURL = API_HOME;
    listUser: UserInfo[] = [];


    constructor(
        private apiService: ApiService,
        private http: HttpClient,
        private jwtService: JsonwtService
            ) {
    }



    getListGroup(body: any): Observable<Group[]> {
        return this.apiService.post('/group/get-list-group',body).pipe(
        )

    }
    getById(id: number): Observable<any> {
        return this.apiService.get(`/user/get-user/${id}`).pipe()
    }

    add(body: any): Observable<any> {
        return this.apiService.post('/user/add-user',body).pipe()
    }

    edit(body: any): Observable<any> {
        return this.apiService.post('/user/edit-user', body).pipe()
    }

    delete(id: number): Observable<any> {
        return this.apiService.delete(`/group/delete/${id}`).pipe();
    }
}
