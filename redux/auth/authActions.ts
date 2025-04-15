import api from "../apiInterceptor";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body?: object) => ({
        url: "http://localhost:8080/auth/login",
        method: "POST",
        body,
      }),
      transformResponse: (res: any) => res,
      transformErrorResponse: (res: any) => res.data,
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "http://localhost:8080/auth/signup",
        method: "POST",
        body,
      }),
      transformResponse: (res: any) => res,
      transformErrorResponse: (res: any) => res.data,
    }),
    getUserInfo: builder.query({
      query: () => ({
        url: "http://localhost:8080/auth/get-user",
        method: "GET",
      }),
      transformResponse: (res: any) => res,
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLazyGetUserInfoQuery } =
  authApi;
