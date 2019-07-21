import { AuthState, initialAuthState } from './auth.state';
import * as cloneDeep from 'lodash.clonedeep';

export class AuthLogic {
  static signIn(state: AuthState, currentBalance: number) {
    const newState = cloneDeep(state) as AuthState;
    newState.isLoggedIn = true;
    newState.currentBalance = currentBalance;

    return newState;
  }

  static signOut() {
    return this.resetAuthState();
  }

  static failAuthentication(state: AuthState) {
    const newState = cloneDeep(state) as AuthState;
    newState.isLoggedIn = false;
    newState.hasFailedAuth = true;
    newState.currentBalance = 0;

    return newState;
  }

  static resetAuthState() {
    const newState = cloneDeep(initialAuthState) as AuthState;

    return newState;
  }
}
