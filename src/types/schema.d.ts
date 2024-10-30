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

interface UpdateProfile {
  username: string;
  photo: string;
}

interface User {
  id: number;
  username: string;
  role: string;
  email: string;
  isActive: boolean;
  photo: string;
  createdAt: string; // Или Date, если будете конвертировать строки в объекты Date
  updatedAt: string; // Аналогично
}

interface IMedia {
  id: number;
  userId: number;
  caption: string;
  mediaUrl: string;
  mediaType: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

interface ICreate {
  caption: string;
  mediaUrl: string;
  mediaType: string;
  file?: string;
}
