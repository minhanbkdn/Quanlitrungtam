import {HttpHeaders} from '@angular/common/http';

export const API_URL = 'http://178.128.114.26/api';
export const API_HOME = 'http://178.128.114.26:8080/api/home';
export const API_ADMIN = 'http://178.128.114.26:8080/usermanagement/api'
export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
