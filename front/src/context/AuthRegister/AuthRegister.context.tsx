import { createContext, useState } from "react";
import {
  ICreateUser,
  IAuthRegisterContext,
  ILoginProps,
  ILoginResponseProps,
  User,
} from "./interfaces";
import { IProviderProps } from "../children.interface";
import api from "../../service/axios";
import { getToken } from "../../utils/utils";

export const AuthRegisterContext = createContext<IAuthRegisterContext>(
  {} as IAuthRegisterContext
);

const AuthRegisterProvider = ({ children }: IProviderProps) => {
  const [profile, setProfile] = useState<User>({} as User);

  const login = async ({
    email,
    password,
  }: ILoginProps): Promise<ILoginResponseProps | undefined> => {
    const res = await api.post("/login", { email, password });

    return res.data;
  };

  const register = async (data: ICreateUser): Promise<User> => {
    const res = await api.post("/users", data);

    return res.data;
  };

  const getProfile = async (): Promise<User> => {
    const res = await api.get("/users/profile", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return res.data;
  };

  return (
    <AuthRegisterContext.Provider
      value={{ login, register, profile, setProfile, getProfile }}
    >
      {children}
    </AuthRegisterContext.Provider>
  );
};

export default AuthRegisterProvider;
