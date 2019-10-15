import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/page/page-login/page-login.component';
import { PageNotFoundComponent } from './page-not-found/page/page-not-found/page-not-found.component';
import { PrestationsComponent } from './prestations/page/prestations/prestations.component';
// import { ClientComponent } from './prestations/page/prestations/prestations.component';

const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: 'prestations', loadChildren: () => import('./prestations/prestations.module').then(mod => mod.PrestationsModule)},
  // { path: 'clients', loadChildren: () => import('./clients/client/client.module').then(mod => mod.ClientModule)},
  // Rajout de login à la fin de l'URL
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

// Décorateur ng module
@NgModule({
  // declarations: [],
  imports: [
    // Appelé une fois dans toute l'application
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    CommonModule
  ]
})
export class AppRoutingModule {

  constructor(router: RouterModule){
    appRoutes.forEach(element => {

    });
    console.log(JSON.stringify(appRoutes));
  }
}
