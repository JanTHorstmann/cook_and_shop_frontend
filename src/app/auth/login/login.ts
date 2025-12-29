import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Forms } from '../../shared/components/forms/forms';
import { LoginService } from '../../shared/services/auth/login.service';
import { LoginTokenService } from '../../shared/services/token/login-token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Forms
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loading = false;
  serverError: string | null = null;
  router = inject(Router);

  constructor(
    private loginService: LoginService,
    private loginTokenService: LoginTokenService,
  ) { }

  ngOnInit() {
  if (this.loginTokenService.isLoggedIn()) {
    console.log('Auto-login successful');
    this.router.navigate(['/dashboard']);
  }
}

  signIn(data: { email: string; password: string }) {
    this.loading = true;
    this.serverError = null;

    this.loginService.login(data).subscribe({
      next: (res) => {
        console.log('Response', res);
        
        this.loginTokenService.saveToken(res);
        this.loginTokenService.saveRefreshToken(res);
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        if (err.status === 401) {
          this.serverError = 'Invalid email or password';
        } else {
          this.serverError = 'Something went wrong. Try again.';
        }
      }
    });
  }
}
