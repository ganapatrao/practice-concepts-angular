import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly notificationSubject = new Subject<string>();
  readonly notification$ = this.notificationSubject.asObservable();

  show(message: string) {
    this.notificationSubject.next(message);
  }

  clear() {
    this.notificationSubject.next('');
  }
}
