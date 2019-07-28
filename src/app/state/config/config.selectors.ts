import { createSelector } from '@ngrx/store';
import { AppState } from '..';

const selectConfigState = (state: AppState) => state.config;

export const apiUrl = createSelector(
  selectConfigState,
  state => state.apiUrl
);
