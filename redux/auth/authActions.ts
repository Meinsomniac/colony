import api from "../apiInterceptor";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "http://localhost:8080/auth/login",
        method: "POST",
        body,
      }),
      transformResponse: (res: any) => res.data,
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "http://localhost:8080/auth/signup",
        method: "POST",
        body,
      }),
      transformResponse: (res: any) => res.data,
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
