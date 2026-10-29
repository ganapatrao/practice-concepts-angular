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
export const authChildGuard: CanActivateChildFn = (route) => {
  const loginResult = checkLogin();
  if (loginResult !== true) {
    return loginResult;
  }

  const router = inject(Router);
  const role = localStorage.getItem('role');
  const path = route.routeConfig?.path;

  if (
    role === 'template-practice' &&
    path !== 'template-driven-form-practice' &&
    path !== 'what-is-done'
  ) {
    return router.createUrlTree(['/template-driven-form-practice']);
  }

  if (role !== 'template-practice' && path === 'template-driven-form-practice') {
    return router.createUrlTree(['/dashboard']);
  }

  return true;
};
