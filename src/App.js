import React, { useState } from "react";
import Button from "./components/Button";
import Signin from "./Admin/Authentication/Signin";
import Signup from "./Admin/Authentication/Signup";
import { Provider } from "react-redux";
import store from "./store";

import { ToastContainer, Slide } from "react-toastify";
import CustomHeaderDiv from "./components/CustomHeaderDiv";
import Result from "./components/Result";
import Setup from "./routes/setup";
import UserSetup from "./userRoutes/userSetup";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

function App() {
  const pathUrl = window.location.pathname;

  console.log("pathUrl", pathUrl);

  const checkPanel = () => {
    const panelUrl = pathUrl.split("/");

    if (panelUrl[1] !== "user" && panelUrl[1]) {
      console.log(" panelUrl[1]", panelUrl[1]);
      return <Setup />;
    } else {
      return <UserSetup />;
    }
  };

  return (
    <Provider store={store}>
      {checkPanel()}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        transition={Slide}
      />
    </Provider>
  );
}

export default App;
