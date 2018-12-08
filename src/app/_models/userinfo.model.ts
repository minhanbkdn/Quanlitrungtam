import {Group} from './group.model';

export class UserInfo {
    Id: number;
    Ho: string;
    Ten: string;
    GioiTinh: boolean;
    NgaySinh: Date;
    Email: string;
    DiaChi: string;
    SoDienThoai: number;
    CMND: string;
    Avatar: string;   
    GroupList: Group;
}