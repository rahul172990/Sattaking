import { apiConstants as types } from "../../actionTypes/Admin";
import sessionStorage from "../../../utils/localStorage";

const initialState = {
  onLoad: false,
  errorState: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_UPDATE_ADMIN_PROFILE_LOAD:
      return { ...state, onLoad: true };
    case types.API_UPDATE_ADMIN_PROFILE_SUCCESS:
      return { ...state, onLoad: false };
    case types.API_UPDATE_ADMIN_PROFILE_FAILED:
      return { ...state, onLoad: false };
    case types.API_UPDATE_ADMIN_PROFILE_ERROR:
      return { ...state, onLoad: false };

    default:
      return state;
  }
};
