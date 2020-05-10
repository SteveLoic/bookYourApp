import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthComponent } from "./auth.component";
import { TokenInterceptor } from "./shared/token.interceptor";

import { AuthguardService } from "./shared/authguard.service";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthguardService],
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthguardService],
  },
];
@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  exports: [LoginComponent, RegisterComponent, AuthComponent],
})
export class AuthModule {}
