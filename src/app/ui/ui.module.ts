import { NgModule } from '@angular/core';
import { UiComponent } from './components/ui/ui.component';
import { CommonModule } from '@angular/common';
import { CoderbaseUiModule } from '@coderbase/ui';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';



@NgModule({
  declarations: [UiComponent, HeaderComponentComponent, FooterComponentComponent, NavComponentComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    CoderbaseUiModule,
  ]
})
export class UiModule { }
