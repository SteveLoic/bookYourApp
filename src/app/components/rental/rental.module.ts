import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MapModule } from "./../../common/map/map.module";
import { NgPipesModule } from "ngx-pipes";
import { RentalListComponent } from "./rental-list/rental-list.component";
import { RentalListItemComponent } from "./rental-list-item/rental-list-item.component";
import { RentalComponent } from "./rental.component";
import { RentalDetailComponent } from "./rental-detail/rental-detail.component";
import { Routes, RouterModule } from "@angular/router";
import { UppercasePipe } from "./../../common/pipes/uppercase.pipe";
import { AuthguardService } from "../auth/shared/authguard.service";
import { Daterangepicker } from "ng2-daterangepicker";
import { RentalDetailBookingComponent } from "./rental-detail/rental-detail-booking/rental-detail-booking.component";

const routes: Routes = [
  {
    path: "rentals",
    children: [
      {
        path: "",
        component: RentalComponent
      },
      {
        path: ":rentalId",
        component: RentalDetailComponent,
        pathMatch: "full",
        canActivate: [AuthguardService]
      }
    ]
  }
];

@NgModule({
  declarations: [
    RentalListComponent,
    RentalListItemComponent,
    RentalComponent,
    RentalDetailComponent,
    UppercasePipe,
    RentalDetailBookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule,
    MapModule,
    Daterangepicker
  ],
  exports: [RentalListComponent, RentalListItemComponent, RentalComponent]
})
export class RentalModule {}
