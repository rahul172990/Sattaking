import { apiConstants as types } from "../actionTypes/Admin";

const initialState = {
  sidebarRouteIndex: 0,
  sidebarDrawerToggleState: false,
};

export const appState = (state = initialState, action) => {
  switch (action.type) {
    // Sidebar navigation handler action case
    case types.HANDLE_SIDEBAR_NAVIGATION_STATE:
      localStorage.setItem("tabItem", action.index);

      return {
        ...state,
        sidebarRouteIndex: action.index,
      };

    // Sidebar navigation handler action case
    case types.HANDLE_SIDEBAR_DRAWER_TOGGLE_STATE:
      return { ...state, sidebarDrawerToggleState: action.toggler };

    default:
      return { ...state };
  }
};
