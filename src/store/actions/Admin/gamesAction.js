import { apiConstants as types } from "../../actionTypes/Admin";

export const getGamesListAction = () => {
  const action = {
    type: types.API_GET_GAMES_LIST_LOAD,
  };
  return action;
};

export const addGamesAction = (values) => {
  const action = {
    type: types.API_ADD_GAMES_LOAD,
    values,
  };
  return action;
};
