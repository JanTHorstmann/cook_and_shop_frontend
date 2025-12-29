import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginTokenService {
  private platformId = inject(PLATFORM_ID);
  private readonly ACCESS_TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  saveToken(token_response: any): void {
    // this.removeToken();
    localStorage.setItem(this.ACCESS_TOKEN_KEY, token_response.access);
    
  }

  getToken(): string | null {
    if (!this.isBrowser()) {
      return null;
    }
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  removeToken(): void {
    if (this.isBrowser()) {
      localStorage.removeItem(this.ACCESS_TOKEN_KEY);
      localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    }
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  saveRefreshToken(token_response: any) {
    localStorage.setItem(this.REFRESH_TOKEN_KEY, token_response.refresh);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
