import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,

  prepareHeaders: (headers) => {
    try {
      const storedTokens = localStorage.getItem("tokens");
      const accessToken: IToken = storedTokens ? JSON.parse(storedTokens) : {};

      if (accessToken?.accessToken) {
        headers.set("Authorization", `Bearer ${accessToken.accessToken}`);
      }
    } catch (error) {
      console.error("Ошибка при чтении токена из localStorage:", error);
    }

    return headers;
  },
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const response = await baseQuery(args, api, extraOptions);
  return response;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["auth", "me", "post-my"],
  endpoints: () => ({}),
});
