import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TranslationModule, LocaleService, TranslationService } from 'angular-l10n';

import { AppComponent } from './app.component';
import { DefaultComponent } from './app.default.component';
import { HomeComponent } from './home/app.home.component';
import { ItemComponent } from './item/app.item.component';
import { ItemEditionComponent } from './item-edition/item-edition.component';
import { ItemService } from './item/app.item.service';
import { LoginComponent } from './login/app.login.component';
import { LoginService } from './login/app.login.service';
import { NavComponent } from './nav/app.nav.component';
import { RoutingModule } from './app.routing.module';
import { AlertComponent } from './alert/app.alert.component';
import { AlertService } from './alert/app.alert.service';
import { BusinessCardService } from './business_card/app.businesscard.service';
import { BusinessCardAlertService } from './business_card/app.businesscard.alert.service';

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    DefaultComponent,
    HomeComponent,
    ItemComponent,
    ItemEditionComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RoutingModule,
    TranslationModule.forRoot(),
  ],
  providers: [ItemService, LoginService, AlertService, BusinessCardService, BusinessCardAlertService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (public locale: LocaleService, public translation: TranslationService) {
    this.locale.addConfiguration().addLanguages(['en', 'fr']).setCookieExpiration(30).defineLanguage('fr');
    this.translation.addConfiguration().addProvider('../assets/locale-');
    if(localStorage.getItem('lang') == undefined) {
      localStorage.setItem('lang', 'fr');
    }
    this.translation.init();
  }
 }
