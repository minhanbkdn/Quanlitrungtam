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

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ChartsModule,
        NgbModule,
        FormsModule
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
        ThongKeTaiSanComponent
    ]
})

export class AdminLayoutModule {
}
