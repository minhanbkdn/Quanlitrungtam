import {TaiSanCuThe} from './tai-san-cu-the';

export class TaiSanV2 {
    id: number;
    idLoaiTaiSan: number;
    idNhomTaiSan: number;
    idDonViTinh: number;
    idPhongBan: number;
    maTaiSan: string;
    maThietBi: string;
    tenTaiSan: string;
    namSuDung: Date;
    thongSoKyThuat: string;
    taiSanCuThe: TaiSanCuThe[]
}
