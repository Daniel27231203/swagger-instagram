import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    upload: build.mutation<UPLOAD.UploadResponse, UPLOAD.UploadRequest>({
      query: (data) => ({
        url: "/upload/file",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUploadMutation } = api;
