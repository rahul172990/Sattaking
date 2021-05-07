import { apiConstants as types } from "../actionTypes/Admin";

// Action to handle navigatin route state
export const handleNavigationStateAction = (index) => {
  let action = {
    type: types.HANDLE_SIDEBAR_NAVIGATION_STATE,
    index,
  };

  return action;
};

// Action to handle
export const handleSidebarDrawerToggleStateAction = (toggler) => {
  let action = {
    type: types.HANDLE_SIDEBAR_DRAWER_TOGGLE_STATE,
    toggler,
  };

  return action;
};
