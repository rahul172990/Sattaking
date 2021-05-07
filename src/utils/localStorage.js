export default {
  // *********************** AUTHENTICATION **************************
  // Set Auth Token
  setAuthToken(token) {
    localStorage.setItem("token", token);
  },
  setUserAuthToken(token) {
    localStorage.setItem("userToken", token);
  },

  // get Auth Token
  getAuthToken() {
    return localStorage.token;
  },

  getUserAuthToken() {
    return localStorage.getItem("userToken");
  },

  // Delete Token
  removeToken() {
    localStorage.removeItem("token");
  },

  removeUserToken() {
    localStorage.removeItem("userToken");
  },
};
