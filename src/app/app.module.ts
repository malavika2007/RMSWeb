import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaseCmpComponent } from './base-cmp/base-cmp.component';
import { LogoutComponent } from './logout/logout.component';
import { WOrderComponent } from './worder/worder.component';
import { ROrderComponent } from './rorder/rorder.component';
import { MOrderComponent } from './morder/morder.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BaseCmpComponent,
    LogoutComponent,
    WOrderComponent,
    ROrderComponent,
    MOrderComponent,
    ErrorMsgComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  //  bootstrap: [LoginComponent]
  bootstrap: [AppComponent]
 // bootstrap: [DashboardComponent]
})
export class AppModule { }
