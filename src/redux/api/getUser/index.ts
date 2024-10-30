import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<GETUSERS.GetUsersResponse, GETUSERS.GetUsersRequest>({
      query: (id) => ({
        url: `/post/get-other/${id}`,
      }),
      providesTags: ["post-my"],
    }),
    getMy: build.query<GETUSERS.GetUsersResponse, GETUSERS.GetMyRequest>({
      query: () => ({
        url: `/post/get-my`,
        method: "GET",
      }),
      providesTags: ["post-my"],
    }),
    deletePost: build.mutation<GETUSERS.DeleteResponse, GETUSERS.DeleteRequset>(
      {
        query: (id) => ({
          url: `/post/delete/${id}`,
          method: "DELETE",
        }),
      }
    ),
  }),
});

export const { useGetUserQuery, useGetMyQuery, useDeletePostMutation } = api;
