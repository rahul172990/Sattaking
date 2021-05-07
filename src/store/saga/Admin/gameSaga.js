import { takeLatest, call, put, delay, takeEvery } from "redux-saga/effects";
import { apiConstants as types } from "../../actionTypes/Admin";
import * as api from "../../api";
// import cl from "../../../utils/cl";
import history from "../../../utils/history";
import { toast } from "react-toastify";

function* getGamesListSaga() {
  try {
    const result = yield call(api.getGamesList);
    console.log(
      "response result in game list saga ---> ",
      result.result.data.data
    );
    if (result.status === 1) {
      yield put({
        type: types.API_GET_GAMES_LIST_SUCCESS,
        result: result.result.data.data,
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
      yield put({
        type: types.API_GET_GAMES_LIST_FAILED,
        result: result,
      });
    }
  } catch (error) {
    yield put({
      type: types.API_GET_GAMES_LIST_SUCCESS,
      result: error,
    });
  }
}

function* addGameSaga(action) {
  try {
    const result = yield call(api.addGame, action.values);
    console.log("response result in login saga ---> ", result.result);
    if (result.status === 1) {
      history.push("/gameList");
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
      yield put({
        type: types.API_ADD_GAMES_FAILED,
        result: result,
      });
    }
  } catch (error) {
    yield put({
      type: types.API_ADD_GAMES_ERROR,
      result: error,
    });
  }
}

export default function* rootGamesSaga() {
  yield takeEvery(types.API_ADD_GAMES_LOAD, addGameSaga);
  yield takeEvery(types.API_GET_GAMES_LIST_LOAD, getGamesListSaga);
}
