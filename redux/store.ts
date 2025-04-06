import { configureStore } from "@reduxjs/toolkit";
import api from "./apiInterceptor";
import { chatSlice } from "../redux/chat/chatSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [chatSlice.reducerPath]: chatSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
