import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//configuracion del Locale de la app
import localeEs from "@angular/common/locales/es"
import localeFrCA from "@angular/common/locales/fr-CA"

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFrCA);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    BrowserAnimationsModule,
],
  providers: [
    //cambiar idioma de forma global
    {provide: LOCALE_ID, useValue:"es"}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
