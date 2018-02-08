import {Injectable} from '@angular/core';

import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

import {Country} from "../models/country";

@Injectable()
export class CountryService {

  constructor() {
  }

  getAll(): Observable<Country[]> {
    return of([
      new Country(1, "Poland"),
      new Country(2, "Denmark"),
      new Country(3, "Great Britain"),
      new Country(4, "Sweden"),
      new Country(5, "Latvia"),
      new Country(6, "Russia")
    ]);
  }
}
