import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<AUTH.SignInResponse, AUTH.SignInRequest>({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    signUp: build.mutation<AUTH.SignUpResponse, AUTH.SignUpRequest>({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    getMe: build.query<AUTH.GetMeResponse, AUTH.GetMeRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["me"],
    }),
    editProfile: build.mutation<
      AUTH.EditProfileResponse,
      AUTH.EditProfileRequest
    >({
      query: (data) => ({
        url: "/auth/update-profile",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    // refreshToken: build.mutation<
    //   AUTH.RefreshTokenResponse,
    //   AUTH.RefreshTokenRequest
    // >({
    //   query: (ref) => ({
    //     url: "/auth/refresh",
    //     method: "PATCH",
    //     body: ref,
    //   }),
    //   invalidatesTags: ["auth"],
    // }),
    Forgot: build.mutation<AUTH.ForgotResponse, AUTH.ForgotRequest>({
      query: (data) => ({
        url: "/auth/forgot",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    Reset: build.mutation<AUTH.ResetResponse, AUTH.ResetRequest>({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetMeQuery,
  useEditProfileMutation,
  // useRefreshTokenMutation
  useForgotMutation,
  useResetMutation,
} = api;
