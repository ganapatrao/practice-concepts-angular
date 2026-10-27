import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../core/services/employee.service';

@Component({
  selector: 'app-employees-component',
  imports: [RouterLink],
  templateUrl: './employees-component.html',
  styleUrl: './employees-component.css',
})
export class EmployeesComponent {
  router = inject(Router);
  // 1. The employee list and resolver use the same mock data source.
  employees = inject(EmployeeService).employees;

  // 3. Navigate to /employees/:id; the route runs employeeResolver before showing details.
  EditEmployee(id: number) {
    this.router.navigate(['/employees', id], {
      queryParams: { mode: 'edit' },
    });
  }
}
