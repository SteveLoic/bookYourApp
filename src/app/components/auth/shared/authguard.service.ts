import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  private url: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  private handleAuthState(): boolean {
     if (this.isLoginOrRegisterPage()) {
       this.router.navigate(['/rentals']);
       return false;
     }
     return true;
  }

  private handleNotAuthState(): boolean {
     if (this.isLoginOrRegisterPage()) {
       return true;
     }
     this.router.navigate(['/login']);
     return false;
  }

  private isLoginOrRegisterPage(): boolean {
    if (this.url.includes('login') || this.url.includes('register')) {
        return true;
     }
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = state.url;

    if (this.authService.isAuthencicated()) {
       return this.handleAuthState();
    }

    return this.handleNotAuthState();
  }

}






