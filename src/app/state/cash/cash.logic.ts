import { CashState } from './cash.state';
import * as cloneDeep from 'lodash.clonedeep';
import { HttpErrorResponse } from '@angular/common/http';

export class CashLogic {
  static updateBalance(state: CashState, amount: number): CashState {
    const newState = cloneDeep(state) as CashState;
    newState.currentBalance = amount;

    return newState;
  }

  static setErrorState(state: CashState, error: HttpErrorResponse): CashState {
    const newState = cloneDeep(state) as CashState;
    newState.error.message = error.error.error;
    newState.error.statusCode = error.status;
    newState.hasErrored = true;

    return newState;
  }
}
