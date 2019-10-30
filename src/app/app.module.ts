import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { CastComponent } from './components/cast/cast.component';
import { HideLogoComponent } from './components/hide-logo/hide-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    routingComponents,
    CastComponent,
    HideLogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
