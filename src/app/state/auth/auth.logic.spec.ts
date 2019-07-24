import * as cloneDeep from 'lodash.clonedeep';
import { initialAuthState, AuthState } from './auth.state';
import { AuthLogic } from './auth.logic';

describe('Auth Logic', () => {
    it('should log in successfully', () => {
        const state = cloneDeep(initialAuthState);

        const newState = AuthLogic.signIn(state);

        expect(newState).not.toBe(state);
        expect(newState.isLoggedIn).toBeTruthy();
        expect(newState.hasFailedAuth).toBeFalsy();
    });

    it('should fail authentication', () => {
        const state = cloneDeep(initialAuthState);

        const newState = AuthLogic.failAuthentication(state);

        expect(newState).not.toBe(state);
        expect(newState.isLoggedIn).toBeFalsy();
        expect(newState.hasFailedAuth).toBeTruthy();
    });

    it('should reset auth state', () => {
        const newState = AuthLogic.resetAuthState();

        expect(newState.isLoggedIn).toBeFalsy();
        expect(newState.hasFailedAuth).toBeFalsy();
    });
});
