import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { ButtonRouteComponent } from './components/button-route/button-route.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableauLightComponent, ButtonRouteComponent, TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [TableauLightComponent, ButtonRouteComponent, TotalPipe]
})
export class SharedModule { }
