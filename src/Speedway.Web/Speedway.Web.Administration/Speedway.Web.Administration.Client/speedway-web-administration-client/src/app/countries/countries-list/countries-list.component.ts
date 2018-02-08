import {Component, OnInit} from '@angular/core';

import {CountryService} from "../services/country.service";
import {Country} from "../models/country";
import {Grid, GridOptions} from "ag-grid";

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {
  columnDefs;
  rowData: Country[];
  gridOptions: GridOptions;
  rowSelection: string;

  constructor(private countryService: CountryService) {
    this.columnDefs = [{
      headerName: "Country",
      field: "name",
      filter: "agTextColumnFilter",
      editable: true,
      animateRows: true,
      checkboxSelection: true,
      headerCheckboxSelection: true
    }];

    countryService.getAll()
      .subscribe(countries => this.rowData = countries);

    this.gridOptions = <GridOptions>{
      enableFilter: true,
      floatingFilter: true,
      enableSorting: true,
      rowSelection: 'multiple'
    };

    this.rowSelection = "multiple";
  }

  onGridReady(params) {
    this.gridOptions.api.sizeColumnsToFit();
  }

  createCountry() {
    this.gridOptions.api.updateRowData({
      add: [new Country(null, "***")]
    });
    this.gridOptions.api.startEditingCell({
      rowIndex: this.gridOptions.api.getLastDisplayedRow(),
      colKey: 'country'
    });
  }

  removeCountries() {
    this.gridOptions.api.updateRowData({
      remove: this.gridOptions.api.getSelectedRows()
    })
  }

  ngOnInit(): void {
  }
}
