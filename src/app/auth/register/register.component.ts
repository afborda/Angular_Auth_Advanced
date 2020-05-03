import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister = this.fb.group(
    {
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mobilephone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
    },
    { validator: this.matchingPasswords }
  );

  states = ['MG', 'RS', 'SC', 'GO', 'PR', 'SP'];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  matchingPasswords(group: FormGroup) {
    if (group) {
      const password1 = group.controls['password1'].value;
      const password2 = group.controls['password2'].value;
      if (password1 === password2) {
        return null;
      }
    }
    return { matching: false };
  }
  onSubmit() {
    let u: User = {
      ...this.formRegister.value,
      password: this.formRegister.value.password1,
    };
    this.authService.register(u).subscribe(
      (u) => {
        this.snackBar.open(
          'Successfuly Register. Use your credentials to sing in',
          'OK',
          { duration: 2000 }
        );
        this.router.navigateByUrl('/auth/login');
      },
      (err) => {
        this.snackBar.open(err.error.message, 'OK', { duration: 2000 });
      }
    );
  }
}
