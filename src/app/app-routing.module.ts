import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router, PreloadAllModules } from '@angular/router';
import { PageLoginComponent } from './login/page/page-login/page-login.component';
import { LoginRoutingModule } from './login/login-routing.module';


const appRoutes: Routes = [
   { path: '',   redirectTo: '/login', pathMatch: 'full' },

   { path: 'prestations', loadChildren: () => import('./prestations/prestations.module').then(mod => mod.PrestationsModule)},

   { path: 'clients', loadChildren: () => import('./clients/clients.module').then(mod => mod.ClientsModule)},

   { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule)}
];

// Décorateur ng module
@NgModule({
  imports: [

    // Appelé une fois dans toute l'application
    RouterModule.forRoot(appRoutes, {enableTracing: false,
      preloadingStrategy: PreloadAllModules}),
    CommonModule
    // ,
    // LoginRoutingModule
  ]
})
export class AppRoutingModule {

  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
