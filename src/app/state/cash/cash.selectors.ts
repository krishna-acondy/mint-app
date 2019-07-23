import { createSelector } from '@ngrx/store';
import { AppState } from '..';

const selectCashState = (state: AppState) => state.cash;

export const currentBalance = createSelector(
  selectCashState,
  state => state.currentBalance
);

export const hasWithdrawalError = createSelector(
  selectCashState,
  state => state.hasErrored
);

export const withdrawalError = createSelector(
  selectCashState,
  state => state.error
);
