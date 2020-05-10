import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { RentalModule } from "./components/rental/rental.module";
import { AuthModule } from "./components/auth/auth.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RentalModule,
    AuthModule,
    CommonModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
