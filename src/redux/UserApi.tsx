import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserModel } from "./UserModel";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/users" }),
  endpoints: (builder) => ({
    getUser: builder.query<UserModel, void>({
      query: () => "/sdras",
    }),
    getStarred: builder.query<any, void>({
      query: () => "/sdras/starred",
    }),
    getRepo: builder.query<any, void>({
      query: () => "/sdras/repos?per_page=100&sort=updated",
    }),
    getOrganization: builder.query<any, void>({
      query: () => "/sdras/orgs",
    })
  }),
});

export const {
  useGetUserQuery,
  useGetStarredQuery,
  useGetOrganizationQuery,
  useGetRepoQuery
} = userApi;
