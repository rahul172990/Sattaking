import { apiConstants as types } from "../../actionTypes/Admin";
//Login
export const loginAction = (values) => {
  console.log("values in action ---> ", values);
  const action = {
    type: types.API_LOGIN_LOAD,
    values,
  };
  return action;
};
