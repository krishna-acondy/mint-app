import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { AuthState } from './auth';
import { authReducer } from './auth/auth.reducer';
import { InjectionToken } from '@angular/core';
import { configReducer } from './config/config.reducer';

export interface AppState {
  config: { apiUrl: string };
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  config: configReducer,
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
