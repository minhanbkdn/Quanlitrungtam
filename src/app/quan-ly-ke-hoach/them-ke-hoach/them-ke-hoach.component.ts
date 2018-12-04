import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {KeHoach} from '../../_models/ke-hoach';
import {KeHoachService} from '../../_services/ke-hoach.service';
import {DonVi} from '../../_models/don-vi';
import {LoaiKeHoach} from '../../_models/loai-ke-hoach';
import {LibraryService} from '../../_services/library.service';
import {SharingService} from '../../_services/sharing.service';

@Component({
    selector: 'app-them-ke-hoach',
    templateUrl: './them-ke-hoach.component.html',
    styleUrls: ['./them-ke-hoach.component.scss']
})
export class ThemKeHoachComponent implements OnInit {

    donVis: DonVi[] = [];
    loaiKeHoachs: LoaiKeHoach[] = [];

    newKeHoach = {
        id: 0,
        tenKeHoach: '',
        idDonVi: 0,
        idLoaiKeHoach: 0,
        fileName: '',
        fileBase64: '',
        nam: new Date().getFullYear(),
        namHoc: ''
    };
    constructor(private toastr: ToastrService,
                private keHoachService: KeHoachService,
                private libraryService: LibraryService,
                private sharingService: SharingService) {

    }

    ngOnInit() {
        this.getDonVis();
        this.getLoaiKeHoachs();
    }

    onFileChange(event: any) {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            this.newKeHoach.fileName = file.name;
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.newKeHoach.fileBase64 = reader.result;
            }
        }
    }

    getDonVis() {
        this.libraryService.getDonVis().subscribe(
            result => {
                this.donVis = result['result'];
            }, error2 => {
                alert('Khong the fetch don vi');
            }
        );
    }


    getLoaiKeHoachs() {
        this.libraryService.getLoaiKeHoachs().subscribe(
            result => {
                this.loaiKeHoachs = result['result'];
            }, error2 => {
                alert('Khong the fetch loai ke hoach');
            }
        );
    }


    themKeHoach() {
        this.keHoachService.add(this.newKeHoach).subscribe(
            result => {
                if (+result['errorCode'] === 0) {
                    this.sharingService.notifInfo('Thêm kế hoạch thành công!');
                } else {
                    this.sharingService.notifError('Thêm kế hoạch thất bại: ' + result['errorMessage']);
                }
            }, error2 => {
                this.sharingService.notifError('Thêm kế hoạch thất bại: ' + error2['errorMessage']);
            }
        )
    }
}
