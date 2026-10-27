import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private readonly employeesSubject = new BehaviorSubject<Employee[]>([
    { id: 7, name: 'Ava Patel', email: 'ava.patel@example.com', department: 'Engineering' },
    { id: 15, name: 'Noah Kim', email: 'noah.kim@example.com', department: 'Design' },
    { id: 23, name: 'Mia Garcia', email: 'mia.garcia@example.com', department: 'Marketing' },
    { id: 31, name: 'Liam Chen', email: 'liam.chen@example.com', department: 'Human Resources' },
  ]);
  readonly employees$ = this.employeesSubject.asObservable();

  // 7. Look up the mock employee; delay simulates an API response for resolver practice.
  getEmployeeById(id: number): Observable<Employee | undefined> {
    return of(this.employeesSubject.value.find((employee) => employee.id === id)).pipe(
      delay(1500),
    );
  }

  updateEmployee(updatedEmployee: Employee) {
    const updatedEmployees = this.employeesSubject.value.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee,
    );
    this.employeesSubject.next(updatedEmployees);
  }
}
