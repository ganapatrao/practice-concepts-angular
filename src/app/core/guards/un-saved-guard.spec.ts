import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { unSavedGuard } from './un-saved-guard';

describe('unSavedGuard', () => {
  const currentRoute = {} as ActivatedRouteSnapshot;
  const currentState = {} as RouterStateSnapshot;
  const nextState = {} as RouterStateSnapshot;

  it('allows deactivation when there are no unsaved changes', () => {
    spyOn(window, 'confirm');

    const result = unSavedGuard(
      { hasUnsavedChanges: false },
      currentRoute,
      currentState,
      nextState,
    );

    expect(result).toBeTrue();
    expect(window.confirm).not.toHaveBeenCalled();
  });

  it('returns the confirmation choice when there are unsaved changes', () => {
    spyOn(window, 'confirm').and.returnValue(false);

    const result = unSavedGuard(
      { hasUnsavedChanges: true },
      currentRoute,
      currentState,
      nextState,
    );

    expect(result).toBeFalse();
    expect(window.confirm).toHaveBeenCalledWith(
      'You have unsaved changes. Leave this page?',
    );
  });
});
