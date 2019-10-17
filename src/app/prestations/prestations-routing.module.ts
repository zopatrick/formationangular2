import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestationsComponent } from './page/prestations/prestations.component';
import { PrestationAddComponent } from './page/prestation-add/prestation-add.component';


const appRoutes: Routes = [
  {
    path: '', component: PrestationsComponent,
    data: { title: 'Prestations', subTitle: 'Toutes les prestations' }
  },
  {
    path: 'add', component: PrestationAddComponent,
    data: { title: 'Prestations', subTitle: 'Add prestation' }
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class PrestationsRoutingModule { }
