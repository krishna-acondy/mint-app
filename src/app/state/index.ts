import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AuthState } from './auth';
import { authReducer } from './auth/auth.reducer';

export interface AppState {
  auth: AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = [];
