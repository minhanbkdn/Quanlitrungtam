import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DangKyHocService {

    constructor(private apiService: ApiService) {
    }

    getDangKyHocs(condition: any): Observable<any> {
        return this.apiService.post('/course-registrations', condition).pipe();
    }

    changeStateDangKyHoc(data: any): Observable<any> {
        console.log(`${data['id']} + ${data['idTrangThai']}`);
        return this.apiService.put('/course-registrations', data).pipe();
    }

    deleteDangKyHoc(id: number): Observable<any> {
        return this.apiService.delete(`/course-registrations/${id}`).pipe();
    }
}
