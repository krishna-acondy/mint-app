import { CashState } from './cash.state';
import * as cloneDeep from 'lodash.clonedeep';
import { HttpErrorResponse } from '@angular/common/http';
import { Withdrawal } from 'src/app/model/withdrawal';

export class CashLogic {
  static updateBalance(state: CashState, balance: number, overdraft: number, lastWithdrawal: Withdrawal): CashState {
    const newState = cloneDeep(state) as CashState;
    newState.currentBalance = balance;
    newState.overdraft = overdraft;
    newState.error = {message: '', statusCode: 200 };
    newState.lastWithdrawal = cloneDeep(lastWithdrawal);

    return newState;
  }

  static setErrorState(state: CashState, errorResponse: HttpErrorResponse): CashState {
    const newState = cloneDeep(state) as CashState;
    newState.error.message = errorResponse.error.error;
    newState.error.statusCode = errorResponse.status;
    newState.hasErrored = true;

    return newState;
  }
}
