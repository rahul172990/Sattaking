import { combineReducers } from "redux";
import { appState } from "./appState";
import { adminAuthenticationReducer } from "./Admin/authenticationReducer";
import { userListReducer } from "./Admin/userListReducer";
import { gamesReducer } from "./Admin/gamesReducer";
import { profileReducer } from "./Admin/profileReducer";
import { userReducer } from "./User/userReducer";

const rootReducer = combineReducers({
  appState,
  adminAuthenticationReducer,
  userListReducer,
  gamesReducer,
  profileReducer,
  userReducer,
});

export default rootReducer;
