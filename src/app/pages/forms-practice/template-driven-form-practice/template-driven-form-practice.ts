import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-practice',
  imports: [FormsModule, NgIf],
  templateUrl: './template-driven-form-practice.html',
  styleUrl: './template-driven-form-practice.css',
})
export class TemplateDrivenFormPractice {
  employeeName = '';
  employeeEmail = '';

  markAsChanged() {
    console.log('Employee name changed:', this.employeeName);
  }

  onSubmit(empform: NgForm): void {
    console.log('Form submitted with employee name:', empform);
    console.log('Form submitted with employee email:', empform.value.employeeEmail);
  }
}
