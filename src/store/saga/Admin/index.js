import { all, fork } from "redux-saga/effects";
import rootAuthenticationSaga from "./authenticationSaga";
import rootGamesSaga from "./gameSaga";
import rootProfileSaga from "./profileSaga";
import rootUserListSaga from "./userListSaga";

export default function* rootAdminSaga() {
  yield all([
    fork(rootAuthenticationSaga),
    fork(rootUserListSaga),
    fork(rootGamesSaga),
    fork(rootProfileSaga),
  ]);
}
