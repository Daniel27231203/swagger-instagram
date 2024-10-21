namespace AUTH {
  type SignInResponse = IToken;
  type SignInRequest = FormInputs;

  type SignUpResponse = ISignUpToken;
  type SignUpRequest = FormInputsSingUp;

  type GetMeResponse = IUser;
  type GetMeRequest = void;
}
