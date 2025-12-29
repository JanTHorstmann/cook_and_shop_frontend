import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment'
import { Observable } from 'rxjs';
import { LoginTokenService } from '../token/login-token.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private loginTokenService: LoginTokenService,
  ) { }

  login(data: { email: string; password: string }) {
    return this.http.post(
      environment.logInUrl,
      data
    );
  }

  logout() {
    this.loginTokenService.removeToken();
  }

  isLoggedIn(): boolean {
    return this.loginTokenService.isLoggedIn();
  }

}
