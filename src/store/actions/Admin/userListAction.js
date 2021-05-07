import { apiConstants as types } from "../../actionTypes/Admin";

// get user lst
export const getUserList = () => {
  console.log("in action user list");
  const action = {
    type: types.API_GET_USER_LIST_LOAD,
  };
  return action;
};

// add user
export const addUserAction = (values) => {
  const action = {
    type: types.API_ADD_USER_LOAD,
    values,
  };
  return action;
};

// edit user
export const editUserAction = (values) => {
  const action = {
    type: types.API_EDIT_USER_LOAD,
    values,
  };
  return action;
};

// update block/unblock status
export const changeUserBlockStatusAction = (values) => {
  const action = {
    type: types.API_USER_BLOCK_STATUS_LOAD,
    values,
  };
  return action;
};
