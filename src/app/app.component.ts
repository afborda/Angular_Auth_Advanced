import { User } from './auth/user';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  autheticated$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private authService: AuthService, private router: Router) {
    this.autheticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
