import { CashState } from './cash.state';
import * as cloneDeep from 'lodash.clonedeep';

export class CashLogic {
    static updateBalance(state: CashState, amount: number): CashState {
        const newState = cloneDeep(state);
        newState.currentBalance = amount;

        return newState;
    }
}
