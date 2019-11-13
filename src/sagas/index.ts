import { takeLatest } from "redux-saga/effects";

import {
  DECREMENT,
  DECREMENT_ASYNC,
  INCREMENT,
  INCREMENT_ASYNC
} from "../actions/counter/counterConstants";
import {
  onDecrement,
  onDecrementAsync,
  onIncrement,
  onIncrementAsync
} from "./counter";
import { SET_LOGIN } from "../actions/login/counterConstants";
import { GO_LOGIN_PAGE } from "../actions/global/counterConstants";
import { loginApi } from "./login";
import { goToPageSaga } from './global';

export const rootSaga = function* root() {
  yield takeLatest(DECREMENT, onDecrement);
  yield takeLatest(DECREMENT_ASYNC, onDecrementAsync);
  yield takeLatest(INCREMENT, onIncrement);
  yield takeLatest(INCREMENT_ASYNC, onIncrementAsync);
  yield takeLatest(SET_LOGIN, loginApi);
  yield takeLatest(GO_LOGIN_PAGE, goToPageSaga);
  
};
