import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginTokenService } from '../../shared/services/token/login-token.service';

export const authGuardGuard: CanActivateFn = () => {
  const loginTokenService = inject(LoginTokenService);
  const router = inject(Router);

  if (loginTokenService.isLoggedIn()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
