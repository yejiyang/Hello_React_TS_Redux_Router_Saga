import { Action } from "redux";
import {
  SET_LOGIN,
  SET_USER_NAME,
  SET_USER_PWD,
  SET_LOGIN_OUT
} from "../actions/login/counterConstants";
import { LoginAction } from "../actions/login";
export interface ILoginReducer {
  isLogin: boolean;
  userName: string;
  userPWD: string;
}

const initialState = {
  isLogin: false,
  userName: "",
  userPWD: ""
};

export const loginReducer = (state = initialState, action: LoginAction) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLogin: true
      };
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.userName
      };
    case SET_USER_PWD:
      return {
        ...state,
        userPWD: action.userPWD
      };
      case SET_LOGIN_OUT:
        return {
          ...state,
          isLogin: false
        };
    default:
      return state;
  }
};

// export { counterReducer, ICounterReducer };
