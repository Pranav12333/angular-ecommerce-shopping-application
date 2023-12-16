import { CanActivateFn } from '@angular/router';

export const deactivatePageGuard: CanActivateFn = (route, state) => {
  return true;
};
