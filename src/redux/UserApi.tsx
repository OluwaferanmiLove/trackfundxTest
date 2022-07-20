import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserModel } from "./UserModel";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/users" }),
  endpoints: (builder) => ({
    getUser: builder.query<UserModel, void>({
      query: () => "/sdras",
    }),
    // getStarred: builder.query<
  }),
});

export const { useGetUserQuery } = userApi;
