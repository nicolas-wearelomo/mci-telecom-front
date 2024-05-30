export interface AuthState {
  accessToken: string | null;
  currentUser: any | null;
  isAuth: boolean | null;
}

export interface RootState {
  auth: AuthState;
}
