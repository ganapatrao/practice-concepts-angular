import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HasUnsavedChanges } from '../../core/guards/un-saved-guard';
import { Employee, EmployeeService } from '../../core/services/employee.service';

@Component({
  selector: 'app-employee-details-component',
  imports: [FormsModule],
  templateUrl: './employee-details-component.html',
  styleUrl: './employee-details-component.css',
})
export class EmployeeDetailsComponent implements OnInit, HasUnsavedChanges {
  route = inject(ActivatedRoute);
  private readonly employeeService = inject(EmployeeService);
  employeeId: string | null = null;
  mode: string | null = null;
  employee: Employee | undefined;
  employeeName = '';
  hasUnsavedChanges = false;
  saveMessage = '';

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.employeeId = params.get('id');
    });

    this.route.queryParamMap.subscribe((params) => {
      this.mode = params.get('mode');
    });

    // 8. Read the resolved value using the `employee` key configured on the route.
    this.route.data.subscribe((data) => {
      this.employee = data['employee'];
      this.employeeName = this.employee?.name ?? '';
    });
  }

  saveChanges() {
    if (!this.employee) {
      return;
    }

    this.employee = { ...this.employee, name: this.employeeName };
    this.employeeService.updateEmployee(this.employee);
    this.hasUnsavedChanges = false;
    this.saveMessage = `Saved "${this.employee.name}". EmployeeService emitted the updated list through its BehaviorSubject.`;
  }
}
