import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authAction, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(500); // Call API ở đây

    localStorage.setItem("access_token", "xinchaocacbanhihi");

    yield put(
      //Lấy data login ở đây
      authAction.loginSuccess({
        id: 1,
        name: "Admin",
      })
    );
    //redirect
  } catch (error: any) {
    yield put(authAction.loginFailed(error.message));
  }
}
function* handleLogout() {
  localStorage.removeItem("access_token");
  //redirect
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authAction.login.type
      );
      yield fork(handleLogin, action.payload);
    }

    yield take(authAction.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
