import { apiConstants as types } from "../../actionTypes/Admin";
import sessionStorage from "../../../utils/localStorage";

const initialState = {
  onLoad: false,
  errorState: null,
  userListData: null,
  onChangeStatus: false,
};

// LOGIN REDUCER
export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login cases
    case types.API_GET_USER_LIST_LOAD:
      return { ...state, onLoad: true };
    case types.API_GET_USER_LIST_SUCCESS:
      console.log("in user reducers -- >", action.result.data);
      return { ...state, onLoad: false, userListData: action.result.data };

    //BLOCK USER BY ID
    case types.API_USER_BLOCK_STATUS_LOAD:
      return {
        ...state,
        onLoad: false,
        onChangeStatus: true,
      };
    case types.API_USER_BLOCK_STATUS_SUCCESS:
      return {
        ...state,
        onLoad: false,
        onChangeStatus: false,
      };

    case types.API_GET_USER_LIST_FAILED:
      return { ...state, onLoad: false };
    case types.API_GET_USER_LIST_ERROR:
      return { ...state, onLoad: false };
    default:
      return state;
  }
};
