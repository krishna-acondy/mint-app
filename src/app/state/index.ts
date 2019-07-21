import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AuthState } from './auth';
import { authReducer } from './auth/auth.reducer';
import { InjectionToken } from '@angular/core';

export interface AppState {
  auth: AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};

export const metaReducers: MetaReducer<AppState>[] = [];

export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Reducers');

export function getReducers() {
  return reducers;
}

export const reducerProvider = [
  { provide: reducerToken, useFactory: getReducers }
];
