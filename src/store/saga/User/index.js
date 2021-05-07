import { all, fork } from "redux-saga/effects";
import rootUserSaga from "./UserSaga";

export default function* rootUserPanelSaga() {
  yield all([fork(rootUserSaga)]);
}
