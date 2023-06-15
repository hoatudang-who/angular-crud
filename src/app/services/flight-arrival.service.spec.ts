import { TestBed } from '@angular/core/testing';

import { FlightArrivalService } from './flight-arrival.service';

describe('FlightArrivalService', () => {
  let service: FlightArrivalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightArrivalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
