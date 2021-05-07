import { takeLatest, call, put, delay, takeEvery } from "redux-saga/effects";
import { apiConstants as types } from "../../actionTypes/Admin";
import * as api from "../../api";
// import cl from "../../../utils/cl";
import history from "../../../utils/history";
// import { toast } from "react-toastify";

function* userListFailedSaga(result) {
  //   cl("authentication failed", result);
  yield put({
    type: types.API_GET_USER_LIST_FAILED,
  });
  //   toast.error(result?.error, { toastId: result?.status || "est" });
}

function* userListErrorSaga(result) {
  //   cl("authentication error", result);
  yield put({
    type: types.API_GET_USER_LIST_ERROR,
  });
  //   toast.error(result?.error, { toastId: result?.status || "est" });
}

function* userListSaga() {
  //   const { values } = action;
  try {
    const result = yield call(api.getUserList);
    console.log("response result in login saga ---> ", result.result.data.data);
    if (result.status === 1) {
      yield put({
        type: types.API_GET_USER_LIST_SUCCESS,
        result: result.result.data,
      });
    } else if (result.status === 3) {
      console.log(
        "error in auth saga ==> ",
        result.error.response.data.message
      );
      //   toast.error(result.error.response.data.message, {
      //     toastId: result?.status || "est",
      //   });
      // toast.error(result?.error, { toastId: result?.status || "est" });
    } else if (result.status === 4) {
      //   toast.error(result.result.data.message, {
      //     toastId: result?.status || "est",
      //   });
    } else {
      yield call(userListFailedSaga, result);
    }
  } catch (error) {
    yield call(userListErrorSaga, error);
  }
}

function* addUserSaga(action) {
  try {
    const result = yield call(api.addUser, action.values);
    console.log("response result in login saga ---> ", result.result);
    if (result.status === 1) {
      history.push("/dashboard");

      // history.replace("/dashboard");
    } else if (result.status === 3) {
      console.log(
        "error in auth saga ==> ",
        result.error.response.data.message
      );
    } else if (result.status === 4) {
    } else {
      yield call(userListFailedSaga, result);
    }
  } catch (error) {
    yield call(userListErrorSaga, error);
  }
}

function* editUserSaga(action) {
  try {
    const result = yield call(api.editUser, action.values);
    console.log("response result in login saga ---> ", result.result.data.data);
    if (result.status === 1) {
      yield put({
        type: types.API_GET_USER_LIST_SUCCESS,
        result: result.result.data,
      });
    } else if (result.status === 3) {
      console.log(
        "error in auth saga ==> ",
        result.error.response.data.message
      );
    } else if (result.status === 4) {
    } else {
      yield call(userListFailedSaga, result);
    }
  } catch (error) {
    yield call(userListErrorSaga, error);
  }
}

function* changeUserBlockStatusSaga(action) {
  try {
    const result = yield call(api.changeUserBlockStatus, action.values);
    console.log("response result in login saga ---> ", result.result.data.data);
    if (result.status === 1) {
      yield put({
        type: types.API_GET_USER_LIST_SUCCESS,
        // result: result.result.data,
      });
    } else if (result.status === 3) {
      console.log(
        "error in auth saga ==> ",
        result.error.response.data.message
      );
    } else if (result.status === 4) {
    } else {
      yield call(userListFailedSaga, result);
    }
  } catch (error) {
    yield call(userListErrorSaga, error);
  }
}

export default function* rootUserListSaga() {
  yield takeEvery(types.API_GET_USER_LIST_LOAD, userListSaga);
  yield takeEvery(types.API_ADD_USER_LOAD, addUserSaga);
  yield takeLatest(types.API_USER_BLOCK_STATUS_LOAD, changeUserBlockStatusSaga);
}
