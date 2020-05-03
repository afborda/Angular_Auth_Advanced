import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const crendentials = this.loginForm.value;
    this.loading = true;
    this.authService.login(crendentials).subscribe(
      (user) => {
        this.snackBar.open(
          'Logged in successfuly. Welcome ' + user.firstname + '!',
          'OK',
          { duration: 2000 }
        );
        this.router.navigateByUrl('/');
        this.loading = false;
      },
      (err) => {
        this.snackBar.open('Login Error', 'OK', { duration: 2000 });
        this.loading = false;
      }
    );
  }
}
