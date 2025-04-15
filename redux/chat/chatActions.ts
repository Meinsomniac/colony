import api from "../apiInterceptor";

export const chatApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getConverations: builder.query({
      query: (id) => ({
        url: `http://localhost:8080/chat/${id}`,
        method: "GET",
      }),
      transformResponse: (res: any) => res,
    }),
    getAllContacts: builder.query({
      query: (id) => ({
        url: `http://localhost:8080/api/contacts`,
        method: "GET",
      }),
      transformResponse: (res: any) => res,
    }),
  }),
});

export const { useGetConverationsQuery, useGetAllContactsQuery } = chatApi;
