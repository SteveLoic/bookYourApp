import { Component, OnInit, Input } from "@angular/core";
import { Rental } from "../../shared/rental.model";

@Component({
  selector: "byh-rental-detail-booking",
  templateUrl: "./rental-detail-booking.component.html",
  styleUrls: ["./rental-detail-booking.component.css"],
})
export class RentalDetailBookingComponent implements OnInit {
  constructor() {}
  public daterange: any = {};
  @Input() rental: Rental;

  options: any = {
    locale: { format: "YYYY-MM-DD" },
    alwaysShowCalendars: false,
    opens: "left",
  };

  ngOnInit() {}

  public selectedDate(value: any, datepicker?: any) {
    console.log(value);

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }
}
