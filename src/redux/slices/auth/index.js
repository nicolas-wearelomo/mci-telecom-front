import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  currentUser: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state, action) => {
      state.accessToken = initialState.accessToken;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearCurrentUser: (state, action) => {
      state.currentUser = initialState.currentUser;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAccessToken, setCurrentUser, clearAccessToken, clearCurrentUser, setIsAuth } = authSlice.actions;

export default authSlice.reducer;
