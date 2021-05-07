import { userApiConstants as types } from "../../actionTypes/User";

// user login action
const userLoginAction = (values) => {
  console.log("values in user login action ---> ", values);
  const action = {
    type: types.API_USER_LOGIN_LOAD,
    values,
  };
  return action;
};

// get access token login action
const getAccessToken = () => {
  console.log("values in access token action");
  const action = {
    type: types.API_GET_USER_ACCESS_TOKEN_LOAD,
  };
  return action;
};

// list users games action
const listUserGamesAction = () => {
  console.log("values in list User Games Action ");
  const action = {
    type: types.API_GET_USER_GAMES_LIST_LOAD,
  };
  return action;
};

// change password action
const changePasswordAction = (value) => {
  console.log("values in change password Action ");
  const action = {
    type: types.API_CHANGE_USER_PASSWORD_LOAD,
    value,
  };
  return action;
};

// list all games action
const listAllGamesAction = () => {
  console.log("values in list all Games Action ");
  const action = {
    type: types.API_GET_USER_ALL_GAMES_LOAD,
  };
  return action;
};

// update game point action
const updateGamePointsAction = (values) => {
  console.log("values in update Game Points Action ");
  const action = {
    type: types.API_UPDATE_GAME_POINTS_LOAD,
    values,
  };
  return action;
};

export {
  userLoginAction,
  getAccessToken,
  listUserGamesAction,
  changePasswordAction,
  listAllGamesAction,
  updateGamePointsAction,
};
