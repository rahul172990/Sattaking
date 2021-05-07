//React router navigation

import UserPage from "../User/UserPage";
import Login from "../User/Login";
import MyGames from "../User/MyGames";

export const routeConfig = [
  {
    path: "/user/dashboard",
    component: UserPage,
  },
  {
    path: "/user/myGames",
    component: MyGames,
  },
];
