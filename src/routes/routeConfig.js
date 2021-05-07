//React router navigation

import AddUser from "../Admin/AddUser/AddUser";
import SignIn from "../Admin/Authentication/Signin";
import Dashboard from "../Admin/Dashboard/Dashboard";
import EditUser from "../Admin/Dashboard/EditUser";
import AddGame from "../Admin/Games/AddGame";
import GameList from "../Admin/Games/GameList";
import Profile from "../Admin/Profile/Profile";

export const routeConfig = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/addUser",
    component: AddUser,
  },

  {
    path: "/editUser",
    component: EditUser,
  },
  {
    path: "/addGame",
    component: AddGame,
  },
  {
    path: "/gameList",
    component: GameList,
  },
  {
    path: "/updateProfile",
    component: Profile,
  },
];
