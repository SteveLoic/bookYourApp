import { Rental } from './../shared/rental.model';
import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'byh-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  rentals: Rental[] = [];

  constructor(private rentalService: RentalService) {}

  ngOnInit() {
    this.rentalService.getAllRental().subscribe(
      (rentals) => {
          this.rentals = rentals;
      },
      (err) => {

      },

      () => {});
  }
}
