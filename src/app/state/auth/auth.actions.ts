import { createAction, props } from '@ngrx/store';

export const authenticate = createAction(
  '[Auth] Authenticate',
  props<{pin: number}>()
);

export const resetAuthState = createAction(
  '[Auth] Reset Auth State'
);

export const signIn = createAction(
  '[Auth] Sign In',
  props<{name: string}>()
);

export const signOut = createAction(
  '[Auth] Sign Out'
);

export const failAuthentication = createAction(
  '[Auth] Fail Authentication'
);
