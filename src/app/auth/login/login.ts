import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Forms } from '../../shared/components/forms/forms';
import { LoginService } from '../../shared/services/auth/login.service';
import { LoginTokenService } from '../../shared/services/token/login-token.service';

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

  constructor(
    private loginService: LoginService,
    private loginTokenService: LoginTokenService,
  ) { }

  signIn(data: { email: string; password: string }) {
    this.loading = true;
    this.serverError = null;

    this.loginService.login(data).subscribe({
      next: (res) => {
        this.loginTokenService.saveToken(res.access);
        this.loading = false;
        console.log('Login successful');
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
