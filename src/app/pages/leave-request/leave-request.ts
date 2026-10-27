import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HasUnsavedChanges } from '../../core/guards/un-saved-guard';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-leave-request',
  imports: [FormsModule],
  templateUrl: './leave-request.html',
  styleUrl: './leave-request.css',
})
export class LeaveRequest implements HasUnsavedChanges, OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly notificationService = inject(NotificationService);
  pageTitle = '';
  instructions = '';
  employeeName = '';
  leaveType = '';
  startDate = '';
  endDate = '';
  reason = '';
  hasUnsavedChanges = false;

  ngOnInit() {

    //or
    console.log(this.route.snapshot.data['title']);
  console.log(this.route.snapshot.data['permission']);
  
    this.route.data.subscribe((data) => {
      this.pageTitle = data['pageTitle'];
      this.instructions = data['instructions'];
    
    });
  }

  markAsChanged() {
    this.hasUnsavedChanges = true;
  }

  submitRequest() {
    this.hasUnsavedChanges = false;
    this.notificationService.show(`Leave request submitted for ${this.employeeName}. (Mock only)`);
  }
}
