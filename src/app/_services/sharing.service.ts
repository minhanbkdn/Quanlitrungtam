import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor(private toastr: ToastrService) { }



    notifInfo(message: string) {
        this.toastr.clear();
        this.toastr.info(`<span class="now-ui-icons ui-1_bell-53"></span> ${message}`, '', {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: 'alert alert-success alert-with-icon',
            positionClass: 'toast-top-center'
        });
    }

    notifError(message: string) {
        this.toastr.clear();
        this.toastr.info(`<span class="now-ui-icons ui-1_bell-53"></span> ${message}`, '', {
            timeOut: 4000,
            closeButton: true,
            enableHtml: true,
            toastClass: 'alert alert-warning alert-with-icon',
            positionClass: 'toast-top-center'
        });
    }
}
