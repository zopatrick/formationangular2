import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './page/prestations/prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';


/* Decorateur du module */
@NgModule({
  declarations: [PrestationsComponent],
  imports: [
    CommonModule, PrestationsRoutingModule
  ]
})
export class PrestationsModule { }
