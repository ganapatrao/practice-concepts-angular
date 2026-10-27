import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  router = inject(Router);
  isAdmin = false;

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    // Used by admin-match-guard.ts to select the admin dashboard route.
    localStorage.setItem('role', this.isAdmin ? 'admin' : 'employee');
    this.router.navigate(['/dashboard']);
  }
}
