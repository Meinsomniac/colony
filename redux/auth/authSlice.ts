import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
  isAuthenticated: boolean;
};

const initialState = {
  isAuthenticated: false,
  userInfo: {},
};

export const authSlice = createSlice({
  name: "user",
  reducerPath: "user",
  initialState,
  reducers: {
    updateIsAuthenticated: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
    updateUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
    resetUserInfo: (state, action) => {
      state = initialState;
    },
  },
});

export const { updateIsAuthenticated, updateUserInfo, resetUserInfo } =
  authSlice.actions;
