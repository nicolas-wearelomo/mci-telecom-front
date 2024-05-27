import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  currentUser: null,
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
  },
});

export const { setAccessToken, setCurrentUser, clearAccessToken, clearCurrentUser } = authSlice.actions;

export default authSlice.reducer;
