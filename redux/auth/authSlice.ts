import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
  isAuthenticated: boolean;
};

const initialState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "user",
  reducerPath: "user",
  initialState,
  reducers: {
    updateIsAuthenticated: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
  },
});

export const { updateIsAuthenticated } = authSlice.actions;
