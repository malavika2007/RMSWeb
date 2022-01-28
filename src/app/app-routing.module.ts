import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component'
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  
  { path:"dashboard",component:DashboardComponent},
  { path:"Login",component:LoginComponent},
  { path:"logout",component:LogoutComponent},
  { path:'**', component:ErrorMsgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
