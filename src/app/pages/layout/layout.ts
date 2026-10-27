import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { inject } from '@angular/core';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLinkActive, RouterLink, AsyncPipe],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  private readonly notificationService = inject(NotificationService);
  readonly notification$ = this.notificationService.notification$;

  dismissNotification() {
    this.notificationService.clear();
  }
}
