export interface AuthState {
  isSignedIn: boolean;
  hasFailedAuth: boolean;
}

export const initialAuthState: AuthState = {
  isSignedIn: false,
  hasFailedAuth: false
};
