import { createAction, props } from '@ngrx/store';

export const authenticate = createAction(
  '[Auth] Authenticate',
  props<{pin: number}>()
);

export const resetAuthState = createAction(
  '[Auth] Reset Auth State'
);

export const login = createAction(
  '[Auth] Log In',
  props<{currentBalance: number}>()
);

export const failAuthentication = createAction(
  '[Auth] Fail Authentication'
);
