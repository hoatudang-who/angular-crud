import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightArrivalService {

  constructor(private _http: HttpClient) { }

  addFlightArrival(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/FlightArrival', data);
  }
  getFlightArrival(): Observable<any> {
    return this._http.get('http://localhost:3000/FlightArrival');
  }

  updateFlightArrival(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/FlightArrival/${id}`, data);
  }

  deleteFlightArrival(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/FlightArrival/${id}`);
  }
}
