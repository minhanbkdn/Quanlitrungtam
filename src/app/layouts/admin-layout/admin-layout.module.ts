import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {ChartsModule} from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {ThongKeComponent} from '../../thong-ke/thong-ke.component';
import {HienThiNhomTaiSanComponent} from '../../quan-ly-nhom-tai-san/hien-thi-nhom-tai-san/hien-thi-nhom-tai-san.component';
import {HienThiTaiSanComponent} from '../../quan-ly-tai-san/hien-thi-tai-san/hien-thi-tai-san.component';
import {HienThiKeHoachComponent} from '../../quan-ly-ke-hoach/hien-thi-ke-hoach/hien-thi-ke-hoach.component';
import {HienThiDeXuatComponent} from '../../quan-ly-de-xuat/hien-thi-de-xuat/hien-thi-de-xuat.component';
import {ThemTaiSanComponent} from '../../quan-ly-tai-san/them-tai-san/them-tai-san.component';
import {SuaTaiSanComponent} from '../../quan-ly-tai-san/sua-tai-san/sua-tai-san.component';
import {ThemNhomTaiSanComponent} from '../../quan-ly-nhom-tai-san/them-nhom-tai-san/them-nhom-tai-san.component';
import {SuaNhomTaiSanComponent} from '../../quan-ly-nhom-tai-san/sua-nhom-tai-san/sua-nhom-tai-san.component';
import {ThemKeHoachComponent} from '../../quan-ly-ke-hoach/them-ke-hoach/them-ke-hoach.component';
import {ThemDeXuatComponent} from '../../quan-ly-de-xuat/them-de-xuat/them-de-xuat.component';
import {TaiSanComponent} from '../../quan-ly-tai-san/tai-san/tai-san.component';
import {LoginComponent} from '../../login/login.component';
import {KeHoachComponent} from '../../quan-ly-ke-hoach/ke-hoach/ke-hoach.component';
import {NhomTaiSanComponent} from '../../quan-ly-nhom-tai-san/nhom-tai-san/nhom-tai-san.component';
import {DeXuatComponent} from '../../quan-ly-de-xuat/de-xuat/de-xuat.component';
import {TaisanPipe} from '../../_pipes/taisan.pipe';
import {ThongKeTaiSanComponent} from '../../thong-ke/thong-ke-tai-san/thong-ke-tai-san.component';

import {HienThiDsGiaoVienComponent} from '../../quan-li-giao-vien/hien-thi-ds-giao-vien/hien-thi-ds-giao-vien.component';
import {SuaGiaoVienComponent} from '../../quan-li-giao-vien/sua-giao-vien/sua-giao-vien.component';
import {ThemGiaoVienComponent} from '../../quan-li-giao-vien/them-giao-vien/them-giao-vien.component';
import {GiaoVienComponent} from '../../quan-li-giao-vien/giao-vien/giao-vien.component';
import {DanhSachDangKyHocComponent} from '../../quan-ly-dang-ky-hoc/danh-sach-dang-ky-hoc/danh-sach-dang-ky-hoc.component';
import {DanhSachKhoaHocComponent} from '../../quan-ly-khoa-hoc/danh-sach-khoa-hoc/danh-sach-khoa-hoc.component';
import {ThemKhoaHocComponent} from '../../quan-ly-khoa-hoc/them-khoa-hoc/them-khoa-hoc.component';
import {SuaKhoaHocComponent} from '../../quan-ly-khoa-hoc/sua-khoa-hoc/sua-khoa-hoc.component';
import {KhoaHocComponent} from '../../quan-ly-khoa-hoc/khoa-hoc/khoa-hoc.component';
import {HocVienComponent} from '../../quan-ly-hoc-vien/hoc-vien/hoc-vien.component';
import {DanhSachHocVienComponent} from '../../quan-ly-hoc-vien/danh-sach-hoc-vien/danh-sach-hoc-vien.component';
import {ThemHocVienComponent} from '../../quan-ly-hoc-vien/them-hoc-vien/them-hoc-vien.component';
import {SuaHocVienComponent} from '../../quan-ly-hoc-vien/sua-hoc-vien/sua-hoc-vien.component';
import {DanhSachNguoiDungComponent} from '../../quan-ly-nguoi-dung/danh-sach-nguoi-dung/danh-sach-nguoi-dung.component';
import {NguoiDungComponent} from '../../quan-ly-nguoi-dung/nguoi-dung/nguoi-dung.component';
import {ThemNguoiDungComponent} from '../../quan-ly-nguoi-dung/them-nguoi-dung/them-nguoi-dung.component';
import {SuaNguoiDungComponent} from '../../quan-ly-nguoi-dung/sua-nguoi-dung/sua-nguoi-dung.component';
import {DanhSachPhanQuyenComponent} from '../../quan-ly-phan-quyen/danh-sach-phan-quyen/danh-sach-phan-quyen.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ChartsModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        HienThiTaiSanComponent,
        ThemTaiSanComponent,
        SuaTaiSanComponent,
        HienThiNhomTaiSanComponent,
        ThemNhomTaiSanComponent,
        SuaNhomTaiSanComponent,
        HienThiKeHoachComponent,
        ThemKeHoachComponent,
        HienThiDeXuatComponent,
        ThemDeXuatComponent,
        ThongKeComponent,
        TaiSanComponent,
        KeHoachComponent,
        NhomTaiSanComponent,
        DeXuatComponent,
        TaisanPipe,
        ThongKeTaiSanComponent,
        HienThiDsGiaoVienComponent,
        GiaoVienComponent,
        ThemGiaoVienComponent,
        SuaGiaoVienComponent,
        DanhSachDangKyHocComponent,
        DanhSachKhoaHocComponent,
        ThemKhoaHocComponent,
        SuaKhoaHocComponent,
        KhoaHocComponent,
        HocVienComponent,
        DanhSachHocVienComponent,
        ThemHocVienComponent,
        SuaHocVienComponent,
        DanhSachNguoiDungComponent,
        NguoiDungComponent,
        ThemNguoiDungComponent,
        SuaNguoiDungComponent,
        DanhSachPhanQuyenComponent,
    ]
})

export class AdminLayoutModule {
}
