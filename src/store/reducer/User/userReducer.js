import { userApiConstants as types } from "../../actionTypes/User";
import sessionStorage from "../../../utils/localStorage";
const initialState = {
  onLoad: false,
  errorState: null,
  linkExpire: null,
  userGamesData: null,
  allGamesListData: null,
  selectedMenuTab: 0,
};

// LOGIN REDUCER
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login cases
    case types.API_USER_LOGIN_LOAD:
      return { ...state, onLoad: true };
    case types.API_USER_LOGIN_SUCCESS:
      console.log("in user login rerducers -- >", action.result);
      sessionStorage.setUserAuthToken(action.result);
      // window.location.reload();
      return { ...state, onLoad: false };

    //user games
    case types.API_GET_USER_GAMES_LIST_LOAD:
      return { ...state, onLoad: true };
    case types.API_GET_USER_GAMES_LIST_SUCCESS:
      console.log("in user games reducer --> ", action.result.data);
      return { ...state, onLoad: false, userGamesData: action.result.data };
    case types.API_GET_USER_GAMES_LIST_FAILED:
      return { ...state, onLoad: false };
    case types.API_GET_USER_GAMES_LIST_ERROR:
      return { ...state, onLoad: false };

    /// all agames
    case types.API_GET_USER_ALL_GAMES_LOAD:
      return { ...state, onLoad: true };
    case types.API_GET_USER_ALL_GAMES_SUCCESS:
      console.log("in all games reducer --> ", action.result.data);
      return { ...state, onLoad: false, allGamesListData: action.result.data };
    case types.API_GET_USER_ALL_GAMES_FAILED:
      return { ...state, onLoad: false };
    case types.API_GET_USER_ALL_GAMES_ERROR:
      return { ...state, onLoad: false };

    // selected menu tab
    case "SELECTED_MENU":
      return { ...state, selectedMenuTab: action.value };

    // //Fail cases
    // case types.API_AUTHENTICATION_FAILED:
    //   return { ...state, onLoad: false };
    // case types.API_AUTHENTICATION_ERROR:
    //   return { ...state, onLoad: false };
    default:
      return state;
  }
};
