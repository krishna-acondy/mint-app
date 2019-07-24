import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { AuthState, initialAuthState } from './auth';
import { authReducer } from './auth/auth.reducer';
import { InjectionToken } from '@angular/core';
import { configReducer } from './config/config.reducer';
import { CashState, cashReducer, initialCashState } from './cash';

export interface AppState {
  config: { apiUrl: string };
  auth: AuthState;
  cash: CashState;
}

export const initialAppState: AppState = {
  config: { apiUrl: ''},
  auth: initialAuthState,
  cash: initialCashState
};

export const reducers: ActionReducerMap<AppState> = {
  config: configReducer,
  auth: authReducer,
  cash: cashReducer
};

export const metaReducers: MetaReducer<AppState>[] = [];

export const reducerToken = new InjectionToken<ActionReducerMap<AppState>>('Reducers');

export function getReducers() {
  return reducers;
}

export const reducerProvider = [
  { provide: reducerToken, useFactory: getReducers }
];
