import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import 'rxjs/Rx';

class DecodeToken {
  exp = 0;
  username = '';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private decodedToken;

  constructor(private httpClient: HttpClient) {
    this.decodedToken =
      JSON.parse(localStorage.getItem('byh_meta')) || new DecodeToken();
  }

  private saveToken(token: string): string {
    this.decodedToken = jwt_decode(token);
    localStorage.setItem('byh_auth', token);
    localStorage.setItem('byh_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  public register(userData: any): Observable<any> {
    return this.httpClient.post('api/v1/users/register', userData);
  }

  public login(userData: any): Observable<any> {
    return this.httpClient
      .post('api/v1/users/auth', userData)
      .map((token: string) => this.saveToken(token));
  }

  public logout(): void {
    localStorage.removeItem('byh_auth');
    localStorage.removeItem('byh_meta');
    this.decodedToken = new DecodeToken();
  }

  public isAuthencicated(): boolean {
    return moment().isBefore(moment.unix(this.decodedToken.exp));
  }

  public getAuthToken(): string {
    return localStorage.getItem('byh_auth');
  }

  public getUsername(): string {
    return this.decodedToken.username;
  }

}
