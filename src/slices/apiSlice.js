import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../utils/apiUrl";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body
      })
    }),
    getUserProfile: builder.mutation({
      query: () => ({
        url: "/user/profile",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
    }),
    updateUserProfile: builder.mutation({
      query: (body) => ({
        url: "/user/profile",
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body
      })
    })
  })
});

export const {
  useLoginMutation,
  useGetUserProfileMutation,
  useUpdateUserProfileMutation
} = apiSlice;
