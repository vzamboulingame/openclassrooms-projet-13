import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../utils/apiUrl";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (bodyData) => ({
        url: "/user/login",
        method: "POST",
        body: bodyData,
      }),
    }),
    getUserProfile: builder.mutation({
      query: (headerData) => ({
        url: "/user/profile",
        method: "POST",
        headers: headerData,
      }),
    }),
    updateUserProfile: builder.mutation({
      query: (headerData, bodyData) => ({
        url: "/user/profile",
        method: "PUT",
        headers: headerData,
        body: bodyData,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserProfileMutation,
  useUpdateUserProfileMutation,
} = apiSlice;
