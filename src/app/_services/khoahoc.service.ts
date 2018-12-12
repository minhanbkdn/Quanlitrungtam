import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { KhoaHoc } from 'app/_models/khoahoc.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KhoahocService {

  list
  constructor(
    private apiService: ApiService,
  ) {
  }

  getListKhoaHoc(body: any): Observable<KhoaHoc> {
    return this.apiService.post('/courses', body).pipe();
  }

  getById(id: number) {
    return this.apiService.get(`/courses/get/${id}`).pipe();
  }

  add(body: any): Observable<any> {
    return this.apiService.post('/courses/add').pipe();
  }

  edit(body: any): Observable<any> {
    return this.apiService.put('/courses/edit').pipe();
  }

  delete(id: number): Observable<any> {
    return this.apiService.delete(`/courses/delete/${id}`).pipe();
  }

}
