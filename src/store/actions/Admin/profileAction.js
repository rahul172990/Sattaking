import { apiConstants as types } from "../../actionTypes/Admin";

export const updateProfileAction = (values) => {
  const action = {
    type: types.API_UPDATE_ADMIN_PROFILE_LOAD,
    values,
  };
  return action;
};
