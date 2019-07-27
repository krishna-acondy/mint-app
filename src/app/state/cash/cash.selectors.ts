import { createSelector } from '@ngrx/store';
import { AppState } from '..';

const selectCashState = (state: AppState) => state.cash;

export const currentBalance = createSelector(
  selectCashState,
  state => state.currentBalance
);

export const overdraft = createSelector(
  selectCashState,
  state => state.overdraft
);

export const hasWithdrawalError = createSelector(
  selectCashState,
  state => state.hasErrored
);

export const insufficientAtmFunds = createSelector(
  selectCashState,
  state => state.error.statusCode === 500
);

export const insufficientUserFunds = createSelector(
  selectCashState,
  state => state.error.statusCode === 403 || state.overdraft >= 100
);

export const invalidAmount = createSelector(
  selectCashState,
  state => state.error.statusCode === 406
);
