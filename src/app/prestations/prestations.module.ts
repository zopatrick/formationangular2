import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PrestationsComponent } from './page/prestations/prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PrestationAddComponent } from './page/prestation-add/prestation-add.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { ReactiveFormsModule } from '@angular/forms';


/* Decorateur du module */
@NgModule({
  declarations: [PrestationsComponent, PrestationAddComponent, FormPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrestationsModule { }
