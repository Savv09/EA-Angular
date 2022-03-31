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
import { GamesComponent } from './components/games/games.component';
import { FooterContainerComponent } from './components/footer/footer-container/footer-container.component';
import { FooterOneComponent } from './components/footer/footer-one/footer-one.component';
import { FooterTwoComponent } from './components/footer/footer-two/footer-two.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { AlternativeButtonComponent } from './components/buttons/alternative-button/alternative-button.component';
import { OrangeButtonComponent } from './components/buttons/orange-button/orange-button.component';


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
    GamesComponent,
    FooterContainerComponent,
    FooterOneComponent,
    FooterTwoComponent,
    PrimaryButtonComponent,
    AlternativeButtonComponent,
    OrangeButtonComponent,

  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
