import { createSelector } from '@ngrx/store';
import { AppState } from '..';

const selectCashState = (state: AppState) => state.cash;

export const currentBalance = createSelector(
  selectCashState,
  state => state.currentBalance
);
