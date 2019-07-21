export interface AuthState {
  isLoggedIn: boolean;
  hasFailedAuth: boolean;
  currentBalance: number;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  hasFailedAuth: false,
  currentBalance: 0
}
