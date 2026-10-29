import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CurrentUserService, UserRole } from '../../core/services/current-user.service';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  router = inject(Router);
  private readonly currentUserService = inject(CurrentUserService);
  isAdmin = false;
  isTemplatePractice = false;

  login() {
    const role: UserRole = this.isTemplatePractice
      ? 'template-practice'
      : this.isAdmin
        ? 'admin'
        : 'employee';

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('role', role);
    this.currentUserService.setRole(role);
    this.router.navigate([
      role === 'template-practice' ? '/template-driven-form-practice' : '/dashboard',
    ]);
  }
}
