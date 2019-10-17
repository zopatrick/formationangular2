import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './page/clients/clients.component';
import { SharedModule } from '../shared/shared.module';
import { ClientAddComponent } from './page/client-add/client-add.component';

@NgModule({
  declarations: [ClientsComponent, ClientAddComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
