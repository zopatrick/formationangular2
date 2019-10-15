import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { ButtonRouteComponent } from './components/button-route/button-route.component';



@NgModule({
  declarations: [TableauLightComponent, ButtonRouteComponent],
  imports: [
    CommonModule
  ],
  exports: [TableauLightComponent, ButtonRouteComponent]
})
export class SharedModule { }
