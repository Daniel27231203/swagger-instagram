namespace AUTH {
  type SignInResponse = IToken;
  type SignInRequest = FormInputs;

  type SignUpResponse = ISignUpToken;
  type SignUpRequest = FormInputsSingUp;

  type GetMeResponse = IUser;
  type GetMeRequest = void;

  type EditProfileResponse = string;
  type EditProfileRequest = UpdateProfile;

  // type RefreshTokenResponse = string;
  // type RefreshTokenRequest = string;

  type ForgotResponse = string;
  type ForgotRequest = { email: string; frontEndUrl: string };

  type ResetResponse = string;
  type ResetRequest = {
    token: string;
    newPassword: string;
  };
}
