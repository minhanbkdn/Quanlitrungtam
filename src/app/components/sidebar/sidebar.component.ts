import {Component, OnInit} from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    type: number;
    child: RouteInfo[];
    isHasChild: boolean;
    isParent: boolean;
    isCollapsible: boolean;
}

export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'design_app',
        class: '',
        type: 0,
        isHasChild: false,
        isParent: true,
        isCollapsible: false,
        child: []
    },
    {
        path: '/dang-ky-hoc',
        title: 'Quản lý đăng ký học',
        icon: 'objects_planet',
        class: '',
        type: 0,
        isHasChild: false,
        isParent: true,
        isCollapsible: false,
        child: []
    },
    {
        path: '/hoc-vien',
        title: 'Quản lý học viên',
        icon: 'users_circle-08',
        class: '',
        type: 0,
        isHasChild: false,
        isParent: true,
        isCollapsible: false,
        child: []
    },
    {
        path: '/giao-vien',
        title: 'Quản lý giao viên',
        icon: 'users_circle-08',
        class: '',
        type: 0,
        isHasChild: false,
        isParent: true,
        isCollapsible: false,
        child: []
    },
    {
        path: '/khoa-hoc',
        title: 'Quản lý khóa học',
        icon: 'education_hat',
        class: '',
        type: 0,
        isHasChild: false,
        isParent: true,
        isCollapsible: false,
        child: []
    },
    {
        path: '/nguoi-dung',
        title: 'Quản lý người dùng',
        icon: 'users_single-02',
        class: '',
        type: 0,
        isHasChild: false,
        isParent: true,
        isCollapsible: false,
        child: []
    },
    {
        path: '/group',
        title: 'Quản lý Group',
        icon: 'users_single-02',
        class: '',
        type: 0,
        isHasChild: false,
        isParent: true,
        isCollapsible: false,
        child: []
    },
    {
        path: '/phan-quyen',
        title: 'Quản lý phân quyền',
        icon: 'ui-1_lock-circle-open',
        class: '',
        type: 0,
        isHasChild: false,
        isParent: true,
        isCollapsible: false,
        child: []
    },

    {
        path: '',
        title: 'Quản lý tài sản',
        icon: 'business_bank',
        class: 'parent',
        type: 1,
        isHasChild: true,
        isParent: true,
        isCollapsible: false,
        child: []
    },
    {
        path: '/tai-san',
        title: 'Tài sản',
        icon: 'business_bank',
        class: '',
        type: 1,
        isHasChild: false,
        isParent: false,
        isCollapsible: false,
        child: []
    },
    {
        path: '/nhom-tai-san',
        title: 'Nhóm tài sản',
        icon: 'business_bank',
        class: '',
        type: 1,
        isHasChild: false,
        isParent: false,
        isCollapsible: false,
        child: []
    },

    {
        path: '/de-xuat',
        title: 'Quản lý đề xuất',
        icon: 'business_bank',
        class: '',
        type: 0,
        isHasChild: false,
        isParent: true,
        isCollapsible: false,
        child: []
    },

    {
        path: '/ke-hoach',
        title: 'Quản lý kế hoạch',
        icon: 'business_bank',
        class: '',
        type: 0,
        isHasChild: false,
        isParent: true,
        isCollapsible: false,
        child: []
    },

    {
        path: '',
        title: 'Quản lý thống kê',
        icon: 'business_bank',
        class: 'parent',
        type: 4,
        isHasChild: true,
        isParent: true,
        isCollapsible: false,
        child: []
    },
    {
        path: '/thong-ke-tai-san',
        title: 'Thống kê tài sản',
        icon: 'business_money-coins',
        class: '',
        type: 4,
        isHasChild: false,
        isParent: false,
        isCollapsible: false,
        child: []
    },

    // {path: '/icons', title: 'Icons', icon: 'education_atom', class: '', type: 6, isHasChild: false, child: []},
    // {path: '/maps', title: 'Maps', icon: 'location_map-big', class: '', type: 6, isHasChild: false, child: []},
    // {path: '/notifications', title: 'Notifications', icon: 'ui-1_bell-53', class: '', type: 6, isHasChild: false, child: []},
    // {path: '/user-profile', title: 'User Profile', icon: 'users_single-02', class: '', type: 6, isHasChild: false, child: []},
    // {path: '/table-list', title: 'Table List', icon: 'design_bullet-list-67', class: '', type: 6, isHasChild: false, child: []},
    // {path: '/typography', title: 'Typography', icon: 'text_caps-small', class: '', type: 6, isHasChild: false, child: []}
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    menuItems: any[];
    userName: string;
    isCollapse = false;

    constructor() {
        this.userName = '';
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem.isParent);
        ROUTES.forEach(value => {
            if (value.isHasChild) {
                value.child = ROUTES.filter(item => item.type === value.type && !item.isHasChild)
            }
        });
        this.userName = localStorage.getItem('UserName');
    }

    isMobileMenu() {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };

    resetCollapsible(): void {
        ROUTES.forEach(value => {
            value.isCollapsible = false;
        });
    }
}
