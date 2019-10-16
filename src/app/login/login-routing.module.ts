import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page/page-login/page-login.component';


const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class LoginRoutingModule { }
