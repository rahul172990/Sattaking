import axios from "axios";
import { apiUrl } from "../../themes/apiConstants";

let APIKit = axios.create({
  baseURL: `${apiUrl}/`,
  timeout: 60000,
});

APIKit.interceptors.request.use(async (config) => {
  const tokenData = localStorage.getItem("token");
  if (tokenData) {
    // config.headers["access_token"] = `Bearer ${tokenData}`;
    config.headers["Authorization"] = `${tokenData}`;
  }
  console.log("configL", config);
  return config;
});

let UserAPIKit = axios.create({
  baseURL: `${apiUrl}/`,
  timeout: 60000,
});

UserAPIKit.interceptors.request.use(async (config) => {
  const userTokenData = localStorage.getItem("userToken");
  console.log("userToken", userTokenData);
  if (userTokenData) {
    config.headers["Authorization"] = `${userTokenData}`;
  }
  console.log("configL", config);
  return config;
});

export { APIKit, UserAPIKit };
