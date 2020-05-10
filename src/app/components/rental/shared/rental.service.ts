import { Rental } from './rental.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  rentals: Rental[];

  constructor(private http: HttpClient) {}

  getAllRental(): Observable<any> {
    return this.http.get('/api/v1/rentals');
  }

  getRentalById(rentalId: string): Observable<any> {
    return this.http.get('/api/v1/rentals/' + rentalId);
  }
}
