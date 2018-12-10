import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {ThongKeComponent} from '../../thong-ke/thong-ke.component';
import {HienThiTaiSanComponent} from '../../quan-ly-tai-san/hien-thi-tai-san/hien-thi-tai-san.component';
import {HienThiNhomTaiSanComponent} from '../../quan-ly-nhom-tai-san/hien-thi-nhom-tai-san/hien-thi-nhom-tai-san.component';
import {HienThiKeHoachComponent} from '../../quan-ly-ke-hoach/hien-thi-ke-hoach/hien-thi-ke-hoach.component';
import {HienThiDeXuatComponent} from '../../quan-ly-de-xuat/hien-thi-de-xuat/hien-thi-de-xuat.component';
import {ThemTaiSanComponent} from '../../quan-ly-tai-san/them-tai-san/them-tai-san.component';
import {SuaTaiSanComponent} from '../../quan-ly-tai-san/sua-tai-san/sua-tai-san.component';
import {ThemNhomTaiSanComponent} from '../../quan-ly-nhom-tai-san/them-nhom-tai-san/them-nhom-tai-san.component';
import {SuaNhomTaiSanComponent} from '../../quan-ly-nhom-tai-san/sua-nhom-tai-san/sua-nhom-tai-san.component';
import {ThemKeHoachComponent} from '../../quan-ly-ke-hoach/them-ke-hoach/them-ke-hoach.component';
import {ThemDeXuatComponent} from '../../quan-ly-de-xuat/them-de-xuat/them-de-xuat.component';
import {TaiSanComponent} from '../../quan-ly-tai-san/tai-san/tai-san.component';
import {KeHoachComponent} from '../../quan-ly-ke-hoach/ke-hoach/ke-hoach.component';
import {NhomTaiSanComponent} from '../../quan-ly-nhom-tai-san/nhom-tai-san/nhom-tai-san.component';
import {DeXuatComponent} from '../../quan-ly-de-xuat/de-xuat/de-xuat.component';
import {ThongKeTaiSanComponent} from '../../thong-ke/thong-ke-tai-san/thong-ke-tai-san.component';
import {HienThiDsGiaoVienComponent} from '../../quan-li-giao-vien/hien-thi-ds-giao-vien/hien-thi-ds-giao-vien.component';
import { GiaoVienComponent } from 'app/quan-li-giao-vien/giao-vien/giao-vien.component';
import {DanhSachDangKyHocComponent} from '../../quan-ly-dang-ky-hoc/danh-sach-dang-ky-hoc/danh-sach-dang-ky-hoc.component';
import {HocVienComponent} from '../../quan-ly-hoc-vien/hoc-vien/hoc-vien.component';
import {DanhSachHocVienComponent} from '../../quan-ly-hoc-vien/danh-sach-hoc-vien/danh-sach-hoc-vien.component';
import {ThemHocVienComponent} from '../../quan-ly-hoc-vien/them-hoc-vien/them-hoc-vien.component';
import {SuaHocVienComponent} from '../../quan-ly-hoc-vien/sua-hoc-vien/sua-hoc-vien.component';
import {KhoaHocComponent} from '../../quan-ly-khoa-hoc/khoa-hoc/khoa-hoc.component';
import {DanhSachKhoaHocComponent} from '../../quan-ly-khoa-hoc/danh-sach-khoa-hoc/danh-sach-khoa-hoc.component';
import {ThemKhoaHocComponent} from '../../quan-ly-khoa-hoc/them-khoa-hoc/them-khoa-hoc.component';
import {SuaKhoaHocComponent} from '../../quan-ly-khoa-hoc/sua-khoa-hoc/sua-khoa-hoc.component';
import {NguoiDungComponent} from '../../quan-ly-nguoi-dung/nguoi-dung/nguoi-dung.component';
import {DanhSachNguoiDungComponent} from '../../quan-ly-nguoi-dung/danh-sach-nguoi-dung/danh-sach-nguoi-dung.component';
import {ThemNguoiDungComponent} from '../../quan-ly-nguoi-dung/them-nguoi-dung/them-nguoi-dung.component';
import {SuaNguoiDungComponent} from '../../quan-ly-nguoi-dung/sua-nguoi-dung/sua-nguoi-dung.component';
import {DanhSachPhanQuyenComponent} from '../../quan-ly-phan-quyen/danh-sach-phan-quyen/danh-sach-phan-quyen.component';
import {ThemGiaoVienComponent} from '../../quan-li-giao-vien/them-giao-vien/them-giao-vien.component';
import {SuaGiaoVienComponent} from '../../quan-li-giao-vien/sua-giao-vien/sua-giao-vien.component';
import { GroupComponent } from 'app/quan-li-group/group/group.component';
import { HienThiGroupComponent } from 'app/quan-li-group/hien-thi-group/hien-thi-group.component';
import { ThemGroupComponent } from 'app/quan-li-group/them-group/them-group.component';
import { SuaGroupComponent } from 'app/quan-li-group/sua-group/sua-group.component';

export const AdminLayoutRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'table-list', component: TableListComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},

    {path: 'dang-ky-hoc', component: DanhSachDangKyHocComponent},
    {path: 'phan-quyen', component: DanhSachPhanQuyenComponent},

    {
        path: 'hoc-vien', component: HocVienComponent,
        children: [
            {path: '', redirectTo: 'danh-sach-hoc-vien', pathMatch: 'full'},
            {path: 'danh-sach-hoc-vien', component: DanhSachHocVienComponent},
            {path: 'them-hoc-vien', component: ThemHocVienComponent},
            {path: 'sua-hoc-vien/:id', component: SuaHocVienComponent}
        ]
    },
    {
        path: 'giao-vien', component: GiaoVienComponent,
        children: [
            {path: '', redirectTo: 'hien-thi-giao-vien', pathMatch: 'full'},
            {path: 'hien-thi-giao-vien', component: HienThiDsGiaoVienComponent},
            {path: 'them-giao-vien', component: ThemGiaoVienComponent},
            {path: 'sua-giao-vien/:id', component: SuaGiaoVienComponent}
        ]
    },
    {
        path: 'khoa-hoc', component: KhoaHocComponent,
        children: [
            {path: '', redirectTo: 'danh-sach-khoa-hoc', pathMatch: 'full'},
            {path: 'danh-sach-khoa-hoc', component: DanhSachKhoaHocComponent},
            {path: 'them-khoa-hoc', component: ThemKhoaHocComponent},
            {path: 'sua-khoa-hoc/:id', component: SuaKhoaHocComponent}
        ]
    },
    {
        path: 'nguoi-dung', component: NguoiDungComponent,
        children: [
            {path: '', redirectTo: 'danh-sach-nguoi-dung', pathMatch: 'full'},
            {path: 'danh-sach-nguoi-dung', component: DanhSachNguoiDungComponent},
            {path: 'them-nguoi-dung', component: ThemNguoiDungComponent},
            {path: 'sua-nguoi-dung/:id', component: SuaNguoiDungComponent}
        ]
    },

    {
        path: 'group', component: GroupComponent,
        children: [
            {path: '', redirectTo: 'danh-sach-group', pathMatch: 'full'},
            {path: 'danh-sach-group', component: HienThiGroupComponent},
            {path: 'them-group', component: ThemGroupComponent},
            {path: 'sua-group/:id', component: SuaGroupComponent}
        ]
    },


    {
        path: 'tai-san', component: TaiSanComponent,
        children: [
            {path: '', redirectTo: 'hien-thi-tai-san', pathMatch: 'full'},
            {path: 'hien-thi-tai-san', component: HienThiTaiSanComponent},
            {path: 'them-tai-san', component: ThemTaiSanComponent},
            {path: 'sua-tai-san/:id', component: SuaTaiSanComponent}
        ]
    },
    {
        path: 'nhom-tai-san', component: NhomTaiSanComponent,
        children: [
            {path: '', redirectTo: 'hien-thi-nhom-tai-san', pathMatch: 'full'},
            {path: 'hien-thi-nhom-tai-san', component: HienThiNhomTaiSanComponent},
            {path: 'them-nhom-tai-san', component: ThemNhomTaiSanComponent},
            {path: 'sua-nhom-tai-san', component: SuaNhomTaiSanComponent},
        ]
    },

    {
        path: 'ke-hoach', component: KeHoachComponent,
        children: [
            {path: '', redirectTo: 'hien-thi-ke-hoach', pathMatch: 'full'},
            {path: 'hien-thi-ke-hoach', component: HienThiKeHoachComponent},
            {path: 'them-ke-hoach', component: ThemKeHoachComponent},
        ]
    },

    {
        path: 'de-xuat', component: DeXuatComponent,
        children: [
            {path: '', redirectTo: 'hien-thi-de-xuat', pathMatch: 'full'},
            {path: 'hien-thi-de-xuat', component: HienThiDeXuatComponent},
            {path: 'them-de-xuat', component: ThemDeXuatComponent},
        ]
    },

    {path: 'thong-ke-tai-san', component: ThongKeTaiSanComponent},
];
