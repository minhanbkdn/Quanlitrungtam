import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {FormsModule} from '@angular/forms';
import { Error403Component } from './error/error403.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }], canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: '403',
        component: Error403Component
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {useHash: true}),
        FormsModule
    ],
    exports: [],
})
export class AppRoutingModule {
}
