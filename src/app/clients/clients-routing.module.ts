import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './page/clients/clients.component';
import { ClientAddComponent } from './page/client-add/client-add.component';


const appRoutes: Routes = [
  {
    path: '', component: ClientsComponent,
    data: { title: 'Client', subTitle: 'Tous les clients' }
  },
  {
    path: 'add', component: ClientAddComponent,
    data: { title: 'Clients', subTitle: 'Add Client' }
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class ClientsRoutingModule { }
