import { AuthState, initialAuthState } from './auth.state';
import * as cloneDeep from 'lodash.clonedeep';

export class AuthLogic {
  static signIn(state: AuthState, name: string) {
    const newState = cloneDeep(state) as AuthState;
    newState.isSignedIn = true;
    newState.hasFailedAuth = false;

    localStorage.setItem('signedInUser', name);

    return newState;
  }

  static signOut() {
    return this.resetAuthState();
  }

  static failAuthentication(state: AuthState) {
    const newState = cloneDeep(state) as AuthState;
    newState.isSignedIn = false;
    newState.hasFailedAuth = true;

    return newState;
  }

  static resetAuthState() {
    localStorage.clear();

    const newState = cloneDeep(initialAuthState) as AuthState;

    return newState;
  }
}
