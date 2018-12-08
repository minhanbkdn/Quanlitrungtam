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
}
