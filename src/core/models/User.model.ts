export interface IUser {
  _id: string;
  accessToken: string;
  email: string;
  name: string;
  theme?: {
    primary: string;
    secondary: string;
  };
  createdAt: Date;
  updatedAt: Date;
  username: string;
}

export interface INewUser {
  name: string;
  email: string;
  username: string;
  password: string;
  theme: {
    primary: string;
    secondary: string;
  };
}

export type IUpdateUser = Partial<INewUser>;
