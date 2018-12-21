import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { KhoaHoc } from 'app/_models/khoahoc.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KhoahocService {

  constructor(
    private apiService: ApiService,
  ) {
  }

  getListKhoaHoc(body: any): Observable<KhoaHoc> {
    return this.apiService.post('/courses/all-courses', body).pipe();
  }

  getById(id: number) {
    return this.apiService.get(`/courses/get/${id}`).pipe();
  }

  add(body: any): Observable<any> {
    console.log("Body: " + JSON.stringify(body))
    return this.apiService.post('/courses/new-course', body).pipe();
  }

  edit(body: any): Observable<any> {
    return this.apiService.put('/courses', body).pipe();
  }

  delete(id: number): Observable<any> {
    return this.apiService.delete(`/courses/${id}`).pipe();
  }

  getAllGiangVien(): Observable<any>{
    return this.apiService.get('/courses/all-teacher').pipe();
  }

}
