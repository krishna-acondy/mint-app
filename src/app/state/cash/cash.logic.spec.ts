import * as cloneDeep from 'lodash.clonedeep';
import { initialCashState } from './cash.state';
import { CashLogic } from './cash.logic';
import { HttpErrorResponse } from '@angular/common/http';

describe('Cash Logic', () => {
    it('should update the balance and overdraft', () => {
        const state = cloneDeep(initialCashState);

        const newState = CashLogic.updateBalance(state, 100, 0);

        expect(newState).not.toBe(state);
        expect(newState.currentBalance).toEqual(100);
        expect(newState.overdraft).toEqual(0);
        expect(newState.hasErrored).toBeFalsy();
    });

    it('should set the state to error', () => {
        const state = cloneDeep(initialCashState);

        const newState = CashLogic.setErrorState(
            state,
            {status: 500, error: {error: 'Test Error'}} as HttpErrorResponse);

        expect(newState).not.toBe(state);
        expect(newState.error.message).toEqual('Test Error');
        expect(newState.error.statusCode).toEqual(500);
        expect(newState.hasErrored).toBeTruthy();
    });
});
