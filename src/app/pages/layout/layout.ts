import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { inject } from '@angular/core';
import { NotificationService } from '../../core/services/notification.service';
import { CurrentUserService } from '../../core/services/current-user.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLinkActive, RouterLink, AsyncPipe],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  private readonly notificationService = inject(NotificationService);
  private readonly currentUserService = inject(CurrentUserService);
  readonly notification$ = this.notificationService.notification$;
  readonly role$ = this.currentUserService.role$;

  dismissNotification() {
    this.notificationService.clear();
  }
}
