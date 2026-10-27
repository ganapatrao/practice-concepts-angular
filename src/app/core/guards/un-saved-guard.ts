import { CanDeactivateFn } from '@angular/router';

export interface HasUnsavedChanges {
  hasUnsavedChanges: boolean;
}

export const unSavedGuard: CanDeactivateFn<HasUnsavedChanges> = (component) => {
  if (!component.hasUnsavedChanges) {
    return true;
  }

  return window.confirm('You have unsaved changes. Leave this page?');
};
