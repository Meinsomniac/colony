import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8080/",
  prepareHeaders: (headers) => {
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
