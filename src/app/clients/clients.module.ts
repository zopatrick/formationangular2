import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './page/clients/clients.component';
import { SharedModule } from '../shared/shared.module';
import { FormClientComponent } from './components/form-client/form-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientAddComponent } from './page/client-add/client-add.component';

@NgModule({
  declarations: [ClientsComponent, FormClientComponent, ClientAddComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
