import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {JsonwtService} from './jsonwt.service';
import {API_URL} from '../_constants/constants';
import {Observable} from 'rxjs';
import {GiaoVien} from '../_models/giao-vien';

@Injectable({
    providedIn: 'root'
})
export class DangKyHocService {
    private dangKyHocURL = API_URL;

    constructor(private apiService: ApiService, private http: HttpClient, private jwtService: JsonwtService) {
    }

    getListGV(): Observable<GiaoVien[]> {
        return this.apiService.get('/get-giang-vien').pipe()
    }
}
