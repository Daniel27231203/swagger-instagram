interface FormInputs {
  email: string;
  password: string;
}

interface IToken {
  accessToken: string;
  accessTokenExpiration: string;
  refreshToken: string;
}

interface IUser {
  profile: {
    id: string;
    username: string;
    role: string;
    email: string;
    isActive: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface ISignUp {
  email: string;
  password: string;
  username: string;
  photo: string;
}
interface ISignUpToken {
  message: string;
  accessToken: string;
  accessTokenExpiration: number;
  refreshToken: string;
}
