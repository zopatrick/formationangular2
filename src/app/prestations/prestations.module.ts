import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PrestationsComponent } from './page/prestations/prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';


/* Decorateur du module */
@NgModule({
  declarations: [PrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ]
})
export class PrestationsModule { }
