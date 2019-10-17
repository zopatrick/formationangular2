import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './page/clients/clients.component';


const appRoutes: Routes = [
  {
    path: '', component: ClientsComponent,
    data: { title: 'Client', subTitle: 'Tous les clients' }
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class ClientsRoutingModule { }
