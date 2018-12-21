import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from 'selenium-webdriver/http';
import { JsonwtService } from './jsonwt.service';
import { Observable } from 'rxjs';
import { Group } from 'app/_models/group.model';
import { HocVien } from 'app/_models/hocvien.model';

@Injectable({
  providedIn: 'root'
})
export class QuanlihocService {

  constructor(
      private apiService: ApiService,
      private jwtService: JsonwtService
          ) {
  }



  getListHocVien(body: any): Observable<HocVien[]> {
      return this.apiService.post('/student/get-list-student',body).pipe(
      )

  }
  getById(id: number): Observable<any> {
      return this.apiService.get(`/student/get/${id}`).pipe()
  }

  add(body: any): Observable<any> {
      return this.apiService.post('/student/post',body).pipe()
  }

  edit(body: any): Observable<any> {
      return this.apiService.put('/student/put', body).pipe()
  }

  delete(id: number): Observable<any> {
      return this.apiService.delete(`/student/delete/${id}`).pipe();
  }

}
