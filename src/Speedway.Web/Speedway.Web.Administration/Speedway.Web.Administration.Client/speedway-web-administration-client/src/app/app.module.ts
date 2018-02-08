import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {CollapseModule} from 'ngx-bootstrap/collapse';

import {AppRoutingModule} from './app-routing.module';
import {CountriesModule} from "./countries/countries.module";

import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
// import {PersonListComponent} from './person-list/person-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    AppRoutingModule,
    CountriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
