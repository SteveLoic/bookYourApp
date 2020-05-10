import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../components/auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'byh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
