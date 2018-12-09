import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { TaisanPipe } from './_pipes/taisan.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpTokenInterceptor} from './interceptors/http.token.interceptor';
import {FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot(),
      HttpClientModule,
      ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
  ],
  providers: [AuthGuard,
    {
       provide: HTTP_INTERCEPTORS,
       useClass: HttpTokenInterceptor, 
       multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
