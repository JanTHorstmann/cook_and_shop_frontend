import { HttpClient, HttpInterceptorFn } from '@angular/common/http';
import { LoginTokenService } from '../token/login-token.service';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(LoginTokenService);
  const http = inject(HttpClient);

  if (
    req.url.includes('/login') ||
    req.url.includes('/refresh')
  ) {
    return next(req);
  }

  const token = tokenService.getToken();

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        const refreshToken = tokenService.getRefreshToken();

        if (!refreshToken) {
          tokenService.removeToken();
          return throwError(() => error);
        }

        return http.post<any>(environment.tokenRefreshUrl, {
          refresh: refreshToken,
        }).pipe(
          switchMap((res) => {
            tokenService.saveToken(res);

            const retryReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${res.access}`,
              },
            });

            return next(retryReq);
          }),
          catchError(() => {
            tokenService.removeToken();
            return throwError(() => error);
          })
        );
      }

      return throwError(() => error);
    })
  );
};
