import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login-component/login-component';
import { DashboardComponet } from './pages/dashboard-compone/dashboard-compone';
import { EmployeesComponent } from './pages/employees-component/employees-component';
import { EmployeeDetailsComponent } from './pages/employee-details-component/employee-details-component';
import { AccessDeniedComponent } from './pages/access-denied-component/access-denied-component';
import { NotFoundComponent } from './pages/not-found-component/not-found-component';
import { Layout } from './pages/layout/layout';
import { LeaveRequest } from './pages/leave-request/leave-request';
import { authChildGuard, authGuard } from './core/guards/auth-guard';
import { unSavedGuard } from './core/guards/un-saved-guard';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';
import { adminMatchGuard } from './core/guards/admin-match-guard';
import { employeeResolver } from './core/resolvers/employee.resolver';
import { TemplateDrivenFormPractice } from './pages/forms-practice/template-driven-form-practice/template-driven-form-practice';
import { WhatIsDone } from './pages/what-is-done/what-is-done';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: Layout,
    canActivate: [authGuard],
    canActivateChild: [authChildGuard],
    children: [
      // CanMatch example: login-component.ts stores the role; admin-match-guard.ts
      // selects AdminDashboard for admins. Keep this route before the employee fallback:
      // when CanMatch returns false, Angular tries the next matching route.
      { path: 'dashboard', component: AdminDashboard, canMatch: [adminMatchGuard] },
      { path: 'dashboard', component: DashboardComponet },
      { path: 'what-is-done', component: WhatIsDone },
      {
        path: 'template-driven-form-practice',
        component: TemplateDrivenFormPractice,
      },
      { path: 'employees', component: EmployeesComponent },
      {
        path: 'leave-request',
        component: LeaveRequest,
        data: {
          pageTitle: 'Leave request',
          instructions: 'Complete the form below to request time off.',
        },
        canDeactivate: [unSavedGuard],
      },
      {
        path: 'employees/:id',
        component: EmployeeDetailsComponent,
        // 4. This route runs the resolver and exposes its result under the `employee` data key.
        resolve: { employee: employeeResolver },
        canDeactivate: [unSavedGuard],
      },
      { path: 'access-denied', component: AccessDeniedComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },
];
