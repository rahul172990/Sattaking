import { Method, UserMethod } from "./apiMethod";

////////////////////////
///////////////////////
// ADMIN
///////////////////////
//////////////////////

//Admin Login
export const login = (values) => Method.POST("Admin/login", values);

//userList
export const getUserList = () => Method.GET("Admin/list_users");

//add user
export const addUser = (values) => Method.POST("Admin/add_edit_user", values);

//edit user
export const editUser = (values) => Method.POST("Admin/add_edit_user", values);

//changeUserlockStatus
export const changeUserBlockStatus = (values) =>
  Method.PUT("Admin/block_users", values);

// add game
export const addGame = (values) => Method.POST("Admin/add_game", values);

// get games list
export const getGamesList = () => Method.GET("Admin/list_games");

// update admin profile
export const updateAdminProfile = (values) =>
  Method.PUT("Admin/update_admin_profile", values);

////////////////////////
///////////////////////
// USER
///////////////////////
//////////////////////

//User Login
export const userlogin = (values) => UserMethod.POST("User/login", values);

//user Access Token
export const userAccessToken = () => UserMethod.GET("User/access_token_login");

//list user games
export const userGameList = () => UserMethod.GET("User/list_user_games");

//change user password
export const changeUserPassword = (values) =>
  UserMethod.PUT("User/change_password", values);

// list all games
export const listAllGames = () => UserMethod.GET("User/list_all_games");

// update game points
export const updateGamePoints = (values) =>
  UserMethod.PUT("User/update_game_point", values);
