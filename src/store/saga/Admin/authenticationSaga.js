import { takeLatest, call, put, delay, takeEvery } from "redux-saga/effects";
import { apiConstants as types } from "../../actionTypes/Admin";
import * as api from "../../api";
// import cl from "../../../utils/cl";
import history from "../../../utils/history";
import { toast } from "react-toastify";

function* authenticationFailedSaga(result) {
  console.log("result i auth", result);
  // toast.error(result.result.data.message, {
  //   toastId: result?.status || "est",
  // });
  yield delay(1500);
  // cl("authentication failed", result);
  yield put({
    type: types.API_AUTHENTICATION_FAILED,
  });
  //   toast.error(result?.error, { toastId: result?.status || "est" });
}

function* authenticationErrorSaga(error) {
  console.log("result i error auth", error);
  //   cl("authentication error", result);
  yield put({
    type: types.API_AUTHENTICATION_ERROR,
  });
  //   toast.error(result?.error, { toastId: result?.status || "est" });
}

function* loginSaga(action) {
  const { values } = action;
  try {
    const result = yield call(api.login, values);
    console.log("response result in login saga ---> ", result);
    if (result.status === 1) {
      //   cl("result inside login saga", result);
      yield put({
        type: types.API_LOGIN_SUCCESS,
        result: result.result.data.data.access_token,
      });
      history.push("/dashboard");
      // window.location.reload();
    } else if (result.status === 3) {
      console.log(
        "error in auth saga ==> ",
        result.error.response.data.message
      );
    } else if (result.status === 4) {
      console.log("result in 4", result.error.error.custom_msg);
      toast.error(result.error.error.custom_msg, {
        toastId: result.error.error.status_code || "est",
      });
    } else {
      yield call(authenticationFailedSaga, result);
    }
  } catch (error) {
    yield call(authenticationErrorSaga, error);
  }
}

export default function* rootAuthenticationSaga() {
  yield takeLatest(types.API_LOGIN_LOAD, loginSaga);
}
