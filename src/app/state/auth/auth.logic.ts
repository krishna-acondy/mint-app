import { AuthState, initialAuthState } from './auth.state';
import * as cloneDeep from 'lodash.clonedeep';

export class AuthLogic {
  static login(state: AuthState, currentBalance: number) {
    const newState = <AuthState>cloneDeep(state);
    newState.isLoggedIn = true;
    newState.currentBalance = currentBalance;

    return newState;
  }

  static failAuthentication(state: AuthState) {
    const newState = <AuthState>cloneDeep(state);
    newState.isLoggedIn = false;
    newState.hasFailedAuth = true;
    newState.currentBalance = 0;

    return newState;
  }

  static resetAuthState() {
    const newState = <AuthState>cloneDeep(initialAuthState);

    return newState;
  }
}