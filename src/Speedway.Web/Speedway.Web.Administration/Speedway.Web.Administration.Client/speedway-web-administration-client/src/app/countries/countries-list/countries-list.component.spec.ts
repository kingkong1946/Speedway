import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {of} from "rxjs/observable/of";

import {IFilterComp} from "ag-grid";
import {AgGridModule} from "ag-grid-angular";

import {CountriesListComponent} from './countries-list.component';
import {CountryService} from "../services/country.service";
import {Country} from "../models/country";

describe('CountriesListComponent', () => {
  let component: CountriesListComponent;
  let fixture: ComponentFixture<CountriesListComponent>;
  let countriesData: Country[] = [
    new Country(1, "Poland"),
    new Country(2, "Denmark"),
    new Country(3, "Great Britain"),
    new Country(4, "Sweden"),
    new Country(5, "Latvia"),
    new Country(6, "Russia")
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AgGridModule.withComponents([])],
      declarations: [CountriesListComponent],
      providers: [CountryService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListComponent);

    var service = fixture.debugElement.injector.get(CountryService);
    spyOn(service, 'getAll').and.returnValue(of(countriesData));

    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have some records on start', () => {
    fixture.detectChanges();
    component.gridOptions.api.selectAll();
    expect(component.gridOptions.api.getSelectedRows().length).toEqual(countriesData.length);
  });

  it('should add record to table', () => {
    fixture.detectChanges();
    component.createCountry();
    component.gridOptions.api.selectAll();
    expect(component.gridOptions.api.getSelectedRows().length).toEqual(countriesData.length + 1);
  });

  it('should remove selected record to table', () => {
    fixture.detectChanges();

    let api = component.gridOptions.api;
    let filter = api.getFilterInstance('name');
    filter.setModel({
      type: 'equals',
      filter: 'Poland'
    });
    api.onFilterChanged();
    api.selectAllFiltered();
    component.removeCountries();

    component.gridOptions.api.selectAll();
    expect(component.gridOptions.api.getSelectedRows().length).toEqual(countriesData.length - 1);
  });
});
