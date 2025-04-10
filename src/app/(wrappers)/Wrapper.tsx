"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "../../../contexts/AuthContext";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider>
      <Provider store={store}>
        <AuthProvider>{children}</AuthProvider>
      </Provider>
    </SnackbarProvider>
  );
}
