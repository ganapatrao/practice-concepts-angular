import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';

const checkLogin = () => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return router.createUrlTree(['/login']);
  }

  return true;
};

export const authGuard: CanActivateFn = () => checkLogin();
export const authChildGuard: CanActivateChildFn = () => checkLogin();
