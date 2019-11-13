import { combineReducers } from "redux";
import { counterReducer, ICounterReducer } from "./counter";
import { loginReducer, ILoginReducer } from "./login";

export interface State {
  counter: ICounterReducer;
  login: ILoginReducer;
}

export const rootReducers = combineReducers<State>({
  counter: counterReducer,
  login: loginReducer
});
