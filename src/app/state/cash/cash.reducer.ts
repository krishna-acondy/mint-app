import { createReducer, on } from '@ngrx/store';
import { withdraw, updateBalance, setErrorState } from './cash.actions';
import { initialCashState } from './cash.state';
import { CashLogic } from './cash.logic';

export const cashReducer = createReducer(
    initialCashState,
    on(
        updateBalance,
        (state, action) => CashLogic.updateBalance(state, action.balance, action.overdraft)
      ),
    on(
      setErrorState,
      (state, action) => CashLogic.setErrorState(state, action.error)
    )
);
