import { takeLatest, call, put, delay, takeEvery } from "redux-saga/effects";
import { userApiConstants as types } from "../../actionTypes/User";
import * as api from "../../api";
// import cl from "../../../utils/cl";
import history from "../../../utils/history";
import { toast } from "react-toastify";

function* userLoginSaga(action) {
  try {
    console.log("in user login saga");

    const result = yield call(api.userlogin, action.values);
    console.log("response result in game list saga ---> ", result);
    if (result.status === 1) {
      yield put({
        type: types.API_USER_LOGIN_SUCCESS,
        result: result.result.data.data.access_token,
      });
      history.push("/");
    } else if (result.status === 3) {
      console.log(
        "error in auth saga ==> ",
        result.error.response.data.message
      );
      toast.error(result.error.error.custom_msg, {
        toastId: result.error.error.status_code || "est",
      });
      //   toast.error(result.error.response.data.message, {
      //     toastId: result?.status || "est",
      //   });
      // toast.error(result?.error, { toastId: result?.status || "est" });
    } else if (result.status === 4) {
      toast.error(result.error.error.custom_msg, {
        toastId: result.error.error.status_code || "est",
      });
    } else {
      yield put({
        type: types.API_USER_LOGIN_FAILED,
        result: result,
      });
    }
  } catch (error) {
    yield put({
      type: types.API_USER_LOGIN_ERROR,
      result: error,
    });
  }
}

function* accessTokenSaga() {
  try {
    const result = yield call(api.userAccessToken);
    console.log("response result in login saga ---> ", result.result);
    if (result.status === 1) {
      yield put({
        type: types.API_GET_USER_ACCESS_TOKEN_SUCCESS,
        result: result.result.data,
      });
    } else if (result.status === 3) {
      console.log(
        "error in auth saga ==> ",
        result.error.response.data.message
      );
    } else if (result.status === 4) {
    } else {
      yield put({
        type: types.API_GET_USER_ACCESS_TOKEN_FAILED,
        result: result,
      });
    }
  } catch (error) {
    yield put({
      type: types.API_GET_USER_ACCESS_TOKEN_ERROR,
      result: error,
    });
  }
}

function* listUserGameSaga() {
  try {
    const result = yield call(api.userGameList);
    console.log("response result in login saga ---> ", result.result);
    if (result.status === 1) {
      yield put({
        type: types.API_GET_USER_GAMES_LIST_SUCCESS,
        result: result.result.data,
      });
    } else if (result.status === 3) {
      console.log(
        "error in auth saga ==> ",
        result.error.response.data.message
      );
    } else if (result.status === 4) {
    } else {
      yield put({
        type: types.API_GET_USER_GAMES_LIST_FAILED,
        result: result,
      });
    }
  } catch (error) {
    yield put({
      type: types.API_GET_USER_GAMES_LIST_ERROR,
      result: error,
    });
  }
}

function* changeUserPasswordSaga(action) {
  try {
    const result = yield call(api.changeUserPassword, action.value);
    console.log("response result in login saga ---> ", result.result);
    if (result.status === 1) {
      yield put({
        type: types.API_CHANGE_USER_PASSWORD_SUCCESS,
        result: result.result.data,
      });
    } else if (result.status === 3) {
      console.log(
        "error in auth saga ==> ",
        result.error.response.data.message
      );
    } else if (result.status === 4) {
    } else {
      yield put({
        type: types.API_CHANGE_USER_PASSWORD_FAILED,
        result: result,
      });
    }
  } catch (error) {
    yield put({
      type: types.API_CHANGE_USER_PASSWORD_ERROR,
      result: error,
    });
  }
}

function* listAllGamesSaga() {
  try {
    const result = yield call(api.listAllGames);
    console.log("response result in login saga ---> ", result.result);
    if (result.status === 1) {
      yield put({
        type: types.API_GET_USER_ALL_GAMES_SUCCESS,
        result: result.result.data,
      });
    } else if (result.status === 3) {
      console.log(
        "error in auth saga ==> ",
        result.error.response.data.message
      );
    } else if (result.status === 4) {
    } else {
      yield put({
        type: types.API_GET_USER_ALL_GAMES_FAILED,
        result: result,
      });
    }
  } catch (error) {
    yield put({
      type: types.API_GET_USER_ALL_GAMES_ERROR,
      result: error,
    });
  }
}

function* gamePointSaga(action) {
  try {
    const result = yield call(api.updateGamePoints, action.valuess);
    console.log("response result in login saga ---> ", result.result);
    if (result.status === 1) {
      yield put({
        type: types.API_UPDATE_GAME_POINTS_SUCCESS,
        result: result.result.data,
      });
    } else if (result.status === 3) {
      console.log(
        "error in auth saga ==> ",
        result.error.response.data.message
      );
    } else if (result.status === 4) {
    } else {
      yield put({
        type: types.API_UPDATE_GAME_POINTS_FAILED,
        result: result,
      });
    }
  } catch (error) {
    yield put({
      type: types.API_UPDATE_GAME_POINTS_ERROR,
      result: error,
    });
  }
}

export default function* rootUserSaga() {
  yield takeEvery(types.API_USER_LOGIN_LOAD, userLoginSaga);
  yield takeEvery(types.API_GET_USER_ACCESS_TOKEN_LOAD, accessTokenSaga);
  yield takeEvery(types.API_GET_USER_GAMES_LIST_LOAD, listUserGameSaga);
  yield takeEvery(types.API_CHANGE_USER_PASSWORD_LOAD, changeUserPasswordSaga);
  yield takeEvery(types.API_GET_USER_ALL_GAMES_LOAD, listAllGamesSaga);
  yield takeEvery(types.API_UPDATE_GAME_POINTS_LOAD, gamePointSaga);
}
