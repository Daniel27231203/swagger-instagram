import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getAllPost: build.query<POSTS.GetAllPostResponse, POSTS.GetAllPostRequest>({
      query: () => ({
        url: "/post/get-all",
      }),
    }),
    createPost: build.mutation<
      POSTS.CreateAllPostResponse,
      POSTS.CreateAllPostRequest
    >({
      query: (data) => ({
        url: "/post/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllPostQuery, useCreatePostMutation } = api;
