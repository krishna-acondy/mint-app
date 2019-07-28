import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import { signIn, failAuthentication, resetAuthState, signOut } from './auth.actions';
import { AuthLogic } from './auth.logic';

export const authReducer = createReducer(
  initialAuthState,
  on(
    signIn,
    (state, action) => AuthLogic.signIn(state, action.name)
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
