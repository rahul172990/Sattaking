import { apiConstants as types } from "../../actionTypes/Admin";
import sessionStorage from "../../../utils/localStorage";

const initialState = {
  onLoad: false,
  errorState: null,
  gamesListData: null,
  onChangeStatus: false,
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_GET_GAMES_LIST_LOAD:
      return { ...state, onLoad: true };
    case types.API_GET_GAMES_LIST_SUCCESS:
      console.log("in game reducers -- >", action.result);
      return { ...state, onLoad: false, gamesListData: action.result };
    case types.API_GET_GAMES_LIST_FAILED:
      return { ...state, onLoad: false };
    case types.API_GET_GAMES_LIST_ERROR:
      return { ...state, onLoad: false };

    case types.API_ADD_GAMES_LOAD:
      return { ...state, onLoad: true };
    case types.API_ADD_GAMES_SUCCESS:
      console.log("in add game reducers -- >", action.result.data);
      return { ...state, onLoad: false };
    case types.API_ADD_GAMES_FAILED:
      return { ...state, onLoad: false };
    case types.API_ADD_GAMES_ERROR:
      return { ...state, onLoad: false };

    default:
      return state;
  }
};
