import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { ButtonRouteComponent } from './components/button-route/button-route.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '../template/template.module';



@NgModule({
  declarations: [TableauLightComponent, ButtonRouteComponent, TotalPipe, StateDirective, TableauDarkComponent],
  imports: [
    CommonModule,
    RouterModule,
    TemplateModule
  ],
  exports: [TableauLightComponent, ButtonRouteComponent, TotalPipe, StateDirective, TableauDarkComponent, TemplateModule]
})
export class SharedModule { }
