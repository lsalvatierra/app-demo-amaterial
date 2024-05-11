import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  const isUserLogged = authService.isLogged();
  if (!!isUserLogged) {
    return true;
  }
  //this.router.navigate(['login']);
  router.navigate(['login'], { queryParams: { blockedPage: state.url } });
  return false;
};
