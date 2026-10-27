import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Employee, EmployeeService } from '../services/employee.service';

// 5. Read :id from the URL and request that employee from EmployeeService.
export const employeeResolver: ResolveFn<Employee | undefined> = (route) => {
  const id = Number(route.paramMap.get('id'));

  if (!Number.isInteger(id)) {
    return undefined;
  }

  // 6. The service Observable is returned; the router waits for its result.
  return inject(EmployeeService).getEmployeeById(id);
};
