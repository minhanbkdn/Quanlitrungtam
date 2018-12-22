import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
    constructor(private apiService: ApiService) {
    }

    getPermissions(idGroup: number) {
        return this.apiService.get(`/permision/${idGroup}`).pipe();
    }

    updatePermission(id: number) {
        return this.apiService.put(`/permision/update/${id}`).pipe();
    }
}
