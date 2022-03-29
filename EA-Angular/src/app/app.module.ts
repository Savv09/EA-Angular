import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlackbarComponent } from './components/blackbar/blackbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavElementComponent } from './components/nav-element/nav-element.component';
import { CardsComponent } from './components/cards/cards.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { Homepage2Component } from './components/homepage2/homepage2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlackbarComponent,
    HomepageComponent,
    NavElementComponent,
    CardsComponent,
    TabsComponent,
    Homepage2Component,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
