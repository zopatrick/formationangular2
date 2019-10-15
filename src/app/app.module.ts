import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { PrestationsComponent } from './prestations/page/prestations/prestations.component';
import { AppRoutingModule } from './app-routing.module';
// import { ClientComponent } from './clients/page/client/client.component';


@NgModule({
  declarations: [
    AppComponent,
    PrestationsComponent
    // ,ClientComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    // A démarrer au démarrage
    UiModule,
    LoginModule,
    PageNotFoundModule,
    AppRoutingModule
    // NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
