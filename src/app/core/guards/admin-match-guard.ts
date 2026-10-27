import { CanMatchFn } from '@angular/router';

// Role is set by the mock login. Returning false lets Angular try the next matching route.
export const adminMatchGuard: CanMatchFn = () => {
  return localStorage.getItem('role') === 'admin';
};
