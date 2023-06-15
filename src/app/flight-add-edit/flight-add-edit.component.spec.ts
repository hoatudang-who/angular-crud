import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAddEditComponent } from './flight-add-edit.component';

describe('FlightAddEditComponent', () => {
  let component: FlightAddEditComponent;
  let fixture: ComponentFixture<FlightAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightAddEditComponent]
    });
    fixture = TestBed.createComponent(FlightAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
