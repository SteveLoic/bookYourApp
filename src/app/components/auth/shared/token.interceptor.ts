import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";

import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  public constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getAuthToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + token
        }
      });
    }

    return next.handle(request);
  }
}
