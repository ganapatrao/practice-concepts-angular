# Angular Routing Practice

Use this file to keep track of the routing topics covered while building the app. Add topics as they come up during practice.

## Progress

| Status | Topic | Notes |
| --- | --- | --- |
| Covered | Navigate programmatically with `router.navigate()` | The login page navigates to `/dashboard`; the Employees Edit button calls `EditEmployee(employee.id)` on click and navigates with `this.router.navigate(['/employees', id])`. |
| Covered | Navigate with the `routerLink` directive | The layout uses `routerLink` on menu links to navigate between routes. |
| In progress | Compare `router.navigate()` and `router.navigateByUrl()` | `navigate()` builds a URL from command segments, such as `this.router.navigate(['/employees', id])`; `navigateByUrl()` navigates using a URL string, such as `this.router.navigateByUrl('/employees/7')`. |
| Covered | Pass and read route parameters | The route `employees/:id` captures the employee ID from a URL such as `/employees/7`; read it with `ActivatedRoute.paramMap` and `params.get('id')`. |
| Covered | Pass and read query parameters | Query parameters follow `?`, for example `/employees/7?mode=view`. Pass them with `[queryParams]="{ mode: 'view' }"` or `router.navigate(..., { queryParams: { mode: 'edit' } })`, then read them with `ActivatedRoute.queryParamMap` and `params.get('mode')`. |
| In progress | Pass and read static route data | The `leave-request` route provides `pageTitle` and `instructions` in its `data` property; the component reads them from `ActivatedRoute.data` and displays them. Try changing the route values and observe the page. |
| Covered | Load route data with a resolver | `app.routes.ts` resolves `employee` with `core/resolvers/employee.resolver.ts` before opening `/employees/:id`. The resolver gets the employee from `core/services/employee.service.ts`; the service uses `of(...).pipe(delay(1500))` to simulate a wait. Click an employee and notice the details route waits for the resolver before displaying the page; try an ID that does not exist too. |
| In progress | Select a route with `CanMatch` | `login-component.ts` stores `role`; `core/guards/admin-match-guard.ts` checks for `admin`; `app.routes.ts` lists the guarded AdminDashboard route before the regular dashboard fallback. If the guard returns false, Angular tries the next matching route. |
| In progress | Prevent navigation with a reusable `CanDeactivate` guard | Angular runs `unSavedGuard` when leaving the employee details or leave request route. It checks the component's `hasUnsavedChanges`: `false` allows navigation; `true` shows a confirmation, where OK allows leaving and Cancel blocks it. Each guarded component implements this property, sets it to `true` when edited, and clears it after saving/submitting. Test by editing the leave form and choosing another menu link. |
| In progress | Share events with an RxJS `Subject` | Submitting the leave request calls `NotificationService.show()`. Its `Subject` emits a notification that the persistent Layout component receives with `AsyncPipe`; dismissing it emits an empty message. |
| Covered | Highlight the active navigation link with `routerLinkActive` | `routerLinkActive="active"` adds the `active` CSS class when the link's route matches the current URL. Style `.active` in the component CSS to control the highlight. |

## Topics to add

Add each new routing topic here when it comes up, with its status and any useful notes.

<!--
| Not started | Topic | Notes |
-->
