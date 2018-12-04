import {Injectable} from '@angular/core';
import {KeHoach} from '../_models/ke-hoach';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_URL, httpOptions} from '../_constants/constants';

@Injectable({
    providedIn: 'root'
})
export class KeHoachService {
    private keHoachUrl = API_URL + '/kehoachs';
    keHoachs: KeHoach[];

    constructor(private http: HttpClient) {
        this.keHoachs = [];        
    }

    getAll(page: number, size: number): Observable<any> {
        const start = +page * +size;
        let end = +start + +size;
        if (end > +this.keHoachs.length - 1) {
            end = +this.keHoachs.length - 1;
        }
        const result = this.keHoachs.slice(start, end);
        return of(
            {
                result: result,
                totals: this.keHoachs.length
            }
        );
    }

    getAllFromApi(page: number, size: number): Observable<any> {
        const url = `${this.keHoachUrl}/?offset=${page}&limit=${size}`;
        return this.http.get(url);
    }

    add(newKeHoach: any): Observable<any> {
        return this.http.post(this.keHoachUrl, newKeHoach, httpOptions);
    }

    duyetKeHoach(keHoach: any): Observable<any> {
        return this.http.put(`${this.keHoachUrl}/duyetkehoach`, keHoach, httpOptions);
    }
}
