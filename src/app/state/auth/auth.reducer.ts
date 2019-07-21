import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import { login, failAuthentication, resetAuthState } from './auth.actions';
import { AuthLogic } from './auth.logic';

export const authReducer = createReducer(
  initialAuthState,
  on(
    login,
    (state, action) => AuthLogic.login(state, action.currentBalance)
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