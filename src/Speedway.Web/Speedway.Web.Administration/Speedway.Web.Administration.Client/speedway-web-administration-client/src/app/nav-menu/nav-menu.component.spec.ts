import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuComponent } from './nav-menu.component';
import {CollapseModule} from "ngx-bootstrap/collapse";
import {AgGridModule} from "ag-grid-angular";

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuComponent ],
      imports: [
        CollapseModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
