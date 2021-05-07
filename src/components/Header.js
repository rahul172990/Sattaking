import React from "react";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppColors from "../themes/appColors";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import { HiMenu } from "react-icons/hi";
import "./customComponentStyle.css";
import { useStyles } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector, useDispatch } from "react-redux";
import { handleSidebarDrawerToggleStateAction } from "../store/actions/index";
import { Hidden } from "@material-ui/core";
import sessionStorage from "../utils/localStorage";
const Header = (props) => {
  const { appState } = useSelector((state) => state);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { sidebarDrawerToggleState } = appState;

  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {},
  }))(MenuItem);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    sessionStorage.removeToken();
    // localStorage.clear()
    history.push("/admin");
  };

  return (
    <>
      <div
        className={clsx(classes.appBar, {
          [classes.appBarShift]: sidebarDrawerToggleState,
        })}
      >
        <div className={clsx(["header-inline-style", classes.headerInline])}>
          {/* <div className="breadcrumb-style">
            <Breadcrumbs pathSnippets={props.data} />
          </div> */}

          {/* <div className="header-user-logo">
            <span className="header-breadcrumb-style">Admin</span>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className="dropdown-button-style"
            >
              <div className="admin-image">
                <FontAwesomeIcon
                  icon={faUser}
                  color={AppColors.headerIcon}
                  className="icon-dimension"
                />
              </div>
            </Button>
          </div> */}

          {/* <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem
              onClick={() => {
                handleClose();
                history.push("/changePassword");
              }}
            >
              <ListItemText
                primary="Change Password"
                className="dropdown-style"
              />
            </StyledMenuItem>
            <StyledMenuItem onClick={() => handleLogout()}>
              <ListItemText primary="Logout" className="dropdown-style" />
            </StyledMenuItem>
          </StyledMenu> */}

          <Hidden mdUp={true}>
            <HiMenu
              size={24}
              onClick={() =>
                dispatch(
                  handleSidebarDrawerToggleStateAction(
                    !sidebarDrawerToggleState
                  )
                )
              }
            />
          </Hidden>
        </div>
      </div>
    </>
  );
};

export default Header;
