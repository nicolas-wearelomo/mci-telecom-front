export interface AuthState {
  accessToken: string | null;
  currentUser: any | null;
}

export interface RootState {
  auth: AuthState;
}
