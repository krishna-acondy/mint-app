import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import { signIn, failAuthentication, resetAuthState, signOut } from './auth.actions';
import { AuthLogic } from './auth.logic';

export const authReducer = createReducer(
  initialAuthState,
  on(
    signIn,
    (state) => AuthLogic.signIn(state)
  ),
  on(
    signOut,
    () => AuthLogic.signOut()
  ),
  on(
    failAuthentication,
    (state) => AuthLogic.failAuthentication(state)
  ),
  on(
    resetAuthState,
    () => AuthLogic.resetAuthState()
  )
);
