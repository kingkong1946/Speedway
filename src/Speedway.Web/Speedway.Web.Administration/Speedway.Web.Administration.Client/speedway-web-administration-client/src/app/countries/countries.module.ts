import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {ModalModule} from "ngx-bootstrap/modal";

import {AgGridModule} from 'ag-grid-angular/main';

import {CountriesListComponent} from "./countries-list/countries-list.component";

import {CountryService} from "./services/country.service";

const countriesRouting: ModuleWithProviders = RouterModule.forChild([
  {path: 'countries', component: CountriesListComponent}
]);

@NgModule({
  imports: [
    countriesRouting,
    CommonModule,
    ModalModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  declarations: [
    CountriesListComponent
  ],
  providers: [
    CountryService
  ]
})
export class CountriesModule {
}
