import { apiConstants as types } from "../../actionTypes/Admin";
import sessionStorage from "../../../utils/localStorage";
const initialState = {
  onLoad: false,
  errorState: null,
  linkExpire: null,
};

// LOGIN REDUCER
export const adminAuthenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login cases
    case types.API_LOGIN_LOAD:
      return { ...state, onLoad: true };
    case types.API_LOGIN_SUCCESS:
      console.log("in rerducers -- >", action.result);
      sessionStorage.setAuthToken(action.result);
      // window.location.reload();
      return { ...state, onLoad: false };

    //Fail cases
    case types.API_AUTHENTICATION_FAILED:
      return { ...state, onLoad: false };
    case types.API_AUTHENTICATION_ERROR:
      return { ...state, onLoad: false };
    default:
      return state;
  }
};
