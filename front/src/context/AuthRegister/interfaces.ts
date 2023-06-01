import { Dispatch, SetStateAction } from "react";

export interface IAuthRegisterContext {
  login({
    email,
    password,
  }: ILoginProps): Promise<ILoginResponseProps | undefined>;
  register(data: ICreateUser): Promise<User>
  profile: User,
  setProfile: Dispatch<SetStateAction<User>>
  getProfile(): Promise<User>
}

export interface ILoginProps {
  email: string;
  password: string;
}

export interface ILoginResponseProps {
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface ICreateUserProps extends Omit<User, "id"> {
  password: string;
}

export type ConfirmPassword = ICreateUserProps & {
  confirmPassword: string;
};

export type ICreateUser<T = false> = T extends ConfirmPassword
  ? ConfirmPassword
  : ICreateUserProps;
