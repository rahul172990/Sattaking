import { takeLatest, call, put, delay, takeEvery } from "redux-saga/effects";
import { apiConstants as types } from "../../actionTypes/Admin";
import * as api from "../../api";
// import cl from "../../../utils/cl";
import history from "../../../utils/history";
// import { toast } from "react-toastify";

function* updateAdminProfileSaga(action) {
  //   const { values } = action;
  try {
    const result = yield call(api.updateAdminProfile, action.values);
    console.log("response result in login saga ---> ", result.result.data.data);
    if (result.status === 1) {
      yield put({
        type: types.API_UPDATE_ADMIN_PROFILE_SUCCESS,
        result: result.result.data,
      });

      localStorage.removeItem("token");
      window.location.reload();
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
        type: types.API_UPDATE_ADMIN_PROFILE_FAILED,
        result: result,
      });
    }
  } catch (error) {
    yield put({
      type: types.API_UPDATE_ADMIN_PROFILE_ERROR,
      result: error,
    });
  }
}

export default function* rootProfileSaga() {
  yield takeEvery(types.API_UPDATE_ADMIN_PROFILE_LOAD, updateAdminProfileSaga);
}
