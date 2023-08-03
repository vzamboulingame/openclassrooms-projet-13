import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../utils/apiUrl";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
    }),
    getUserProfile: builder.mutation({
      query: (data) => ({
        url: "/user/profile",
        method: "POST",
        headers: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useGetUserProfileMutation } = apiSlice;
