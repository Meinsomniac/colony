import { configureStore } from "@reduxjs/toolkit";
import api from "./apiInterceptor";
import { chatSlice } from "../redux/chat/chatSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [chatSlice.reducerPath]: chatSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
