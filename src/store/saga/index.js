import { all, fork } from "redux-saga/effects";
import rootAdminSaga from "./Admin";
import rootUserPanelSaga from "./User";

// To form both root sagas of Admin panel and user panel
export default function* rootSaga() {
  yield all([fork(rootAdminSaga), fork(rootUserPanelSaga)]);
}
