export interface User {
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

export interface NewUser {
  name: string;
  email: string;
  username: string;
  password: string;
  theme: {
    primary: string;
    secondary: string;
  };
}

export type UpdateUser = Partial<NewUser>;
