import { put, delay } from "redux-saga/effects";
// import { fetchData } from "./api";

// worker Saga: will be fired on ASYNC DECREMENT actions
function* loginApi() {
  try {
    console.log("loginApi");
  } catch (e) {
    // tslint:disable-next-line:no-console
    console.log(e);
  }
}

export { loginApi };
