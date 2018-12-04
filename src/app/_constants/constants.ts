import {HttpHeaders} from '@angular/common/http';

export const API_URL = 'http://178.128.114.26/api';
export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
