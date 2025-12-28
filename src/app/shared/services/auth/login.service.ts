import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
  ) { }

  login(data: { email: string; password: string }): Observable<{ access: string }> {
    return this.http.post<{ access: string }>(
      environment.logInUrl,
      data
    );
  }

}
