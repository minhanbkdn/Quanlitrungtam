import { Injectable } from '@angular/core';
import {LoginModel} from '../_models/login-model';
import {Observable} from 'rxjs/Rx';
import {catchError, tap} from 'rxjs/internal/operators';
import {of} from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../_constants/constants';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl =  API_URL +  '/account/login';
  constructor(private http: HttpClient) { }


    /** POST: add a new hero to the server */
    login (loginModel: LoginModel): Observable<any> {
        return this.http.post<any>(this.loginUrl, loginModel, httpOptions).pipe(
            tap((x: any) => console.log(`login ok ${x}`)),
            catchError(this.handleError<any>('login'))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
