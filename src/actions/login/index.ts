import {
  SET_LOGIN,
  SET_USER_NAME,
  SET_USER_PWD,
  SET_LOGIN_OUT
} from "./counterConstants";

export interface ISetLogin {
  type: SET_LOGIN;
}
export interface ILogout {
  type: SET_LOGIN_OUT;
}
export interface ISetUserPWD {
  userPWD: string;
  type: SET_USER_PWD;
}

export interface ISetUserName {
  userName: string;
  type: SET_USER_NAME;
}
export type LoginAction = ISetUserPWD | ISetUserName | ISetLogin|ILogout;

export const setLogin = (): ISetLogin => {
  return { type: SET_LOGIN };
};

export const setLogout = (): ILogout => {
  return { type: SET_LOGIN_OUT };
};
export const setUserName = (userName: string): ISetUserName => {
  return { type: SET_USER_NAME, userName };
};

export const setUserPWD = (userPWD: string): ISetUserPWD => {
  return { type: SET_USER_PWD, userPWD };
};
