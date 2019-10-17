import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestationsComponent } from './page/prestations/prestations.component';


const appRoutes: Routes = [
  {
    path: '', component: PrestationsComponent,
    data: { title: 'Prestations', subTitle: 'Toutes les prestations' }
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class PrestationsRoutingModule { }
