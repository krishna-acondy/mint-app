import { createSelector } from '@ngrx/store';
import { AppState } from '..';

const selectAuthState = (state: AppState) => state.auth;

export const isLoggedIn = createSelector(
  selectAuthState,
  state => state.isLoggedIn
)

export const hasFailedAuth = createSelector(
  selectAuthState,
  state => state.hasFailedAuth
)