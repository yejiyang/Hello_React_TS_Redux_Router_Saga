import { put, delay } from "redux-saga/effects";

function* goToPageSaga() {
  try {
    console.log("goToPageSaga");
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.log(e);
  }
}

export { goToPageSaga };
