import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type UserRole = 'admin' | 'employee';

@Injectable({ providedIn: 'root' })
export class CurrentUserService {
  private readonly roleSubject = new BehaviorSubject<UserRole | null>(
    this.readStoredRole(),
  );
  readonly role$ = this.roleSubject.asObservable();

  setRole(role: UserRole) {
    this.roleSubject.next(role);
  }

  private readStoredRole(): UserRole | null {
    const role = localStorage.getItem('role');
    return role === 'admin' || role === 'employee' ? role : null;
  }
}
