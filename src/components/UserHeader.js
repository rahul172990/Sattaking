import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import localStorage from "../utils/localStorage";
import { useSelector } from "react-redux";

const UserHeader = () => {
  const userToken = localStorage.getUserAuthToken();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const { selectedMenuTab } = useSelector((state) => state.userReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  console.log("selectedMenuTab ---->", selectedMenuTab);

  const setMenu = (id) => {
    setSelectedMenu(id);
  };

  const checkUserLoginState = () => {
    if (userToken) {
      localStorage.removeUserToken();
      window.location.reload();
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="user-header-style">
      <div className="user-left-side-style">
        {/* <img
          src="https://mpng.subpng.com/20180512/fuq/kisspng-counter-strike-global-offensive-call-of-duty-leag-5af741a2b1ce62.1932140515261536347283.jpg"
          height={50}
          width={50}
        /> */}
      </div>
      <div className="user-menu">
        <div
          className="menu-style"
          style={{
            backgroundColor: selectedMenuTab === 0 ? "#393636" : "none",
            borderRadius: 8,
          }}
          onClick={() => {
            history.push("/");
            dispatch({ type: "SELECTED_MENU", value: 0 });
          }}
        >
          <span>Home</span>
        </div>

        <div
          className="menu-style"
          style={{
            display: userToken ? "flex" : "none",
            backgroundColor: selectedMenuTab === 1 ? "#393636" : "none",
            borderRadius: 8,
          }}
          onClick={() => {
            history.push("/user/myGames");
            dispatch({ type: "SELECTED_MENU", value: 1 });
          }}
        >
          <span>My games</span>
        </div>

        {/* <div
          className="menu-style"
          onClick={() => setMenu(2)}
          style={{
            display: userToken ? "flex" : "none",
          }}
        >
          <span>Update Game Point</span>
        </div> */}

        <div className="menu-style" onClick={checkUserLoginState}>
          <span>{userToken ? "Logout" : "Login"}</span>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
