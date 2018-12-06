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

export const AdminLayoutRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'table-list', component: TableListComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},

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

    {
        path: 'giao-vien', component: GiaoVienComponent,
        children: [
            {path: '', redirectTo: 'hien-thi-tai-san', pathMatch: 'full'},
            {path: 'hien-thi-giao-vien', component: HienThiDsGiaoVienComponent},
            {path: 'them-tai-san', component: ThemTaiSanComponent},
            {path: 'sua-tai-san/:id', component: SuaTaiSanComponent}
        ]
    }
];
