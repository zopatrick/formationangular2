import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { ButtonRouteComponent } from './components/button-route/button-route.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [TableauLightComponent, ButtonRouteComponent, TotalPipe, StateDirective],
  imports: [
    CommonModule
  ],
  exports: [TableauLightComponent, ButtonRouteComponent, TotalPipe, StateDirective]
})
export class SharedModule { }
