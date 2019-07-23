export interface AuthState {
  isLoggedIn: boolean;
  hasFailedAuth: boolean;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  hasFailedAuth: false
};
