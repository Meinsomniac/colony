"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { SnackbarProvider } from "notistack";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider>
      <Provider store={store}>{children}</Provider>
    </SnackbarProvider>
  );
}
