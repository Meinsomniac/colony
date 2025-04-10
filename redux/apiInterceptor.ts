import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { getCookie } from "../utils/cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/",
  prepareHeaders: (headers, { getState }) => {
    const state = getState();
    const isAuthenticated = state?.user?.isAuthenticated;
    const token = getCookie("accessToken");
    if (isAuthenticated || getCookie("accessToken")) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const api = createApi({
  baseQuery,
  endpoints: () => ({}),
  reducerPath: "api",
  tagTypes: [],
});

export default api;
