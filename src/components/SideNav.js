import React, { useState, useEffect } from "react";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";
import "./dashboardLayout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faFileVideo,
  faUserPlus,
  faNewspaper,
  faDollarSign,
  faMoneyCheckAlt,
  faSignOutAlt,
  faIdBadge,
  faDice,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import withWidth, { isWidthDown, isWidthUp } from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  List,
  Divider,
  ListItem,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  handleNavigationStateAction,
  handleSidebarDrawerToggleStateAction,
} from "../store/actions/index";

const drawerWidth = 275;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerLogo: {
    position: "relative",
    textAlign: "center",
    padding: theme.spacing(1.1),
  },
  title: {
    fontWeight: 500,
  },
  listPadding: {
    padding: 0,
    marginTop: 20,
  },
  sidebarList: {},
  sidebarIcon: {
    width: 18,
    marginTop: 2,
  },
  typographyRoot: {
    margin: "0 !important",
  },
  breadIcon: {
    width: 24,
    marginBottom: 4,
  },
  customNavbar: {
    padding: 0,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  customNavbarShift: {
    padding: 0,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  container: {
    display: "flex",
  },
  appBar: {
    padding: "1%",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    padding: "1%",
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down("sm")]: {
      marginRight: drawerWidth,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth,
    },
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    paddingLeft: "1%",
    paddingRight: "1%",
    [theme.breakpoints.down("sm")]: {
      alignItems: "baseline",
      justifyContent: "flex-end",
    },
  },
  menuButton: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "#196ea1",
    marginRight: theme.spacing(2),
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      background: "#f5f8f9",
    },
  },
  hide: {
    display: "none",
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },

  breadcrumbIcon: {
    fontSize: 22,
    marginTop: 5,
  },
  icon: {
    fontSize: 20,
    float: "left",
    lineHeight: 30,
    width: "30px !important",
    textAlign: "center",
    marginRight: 15,
  },
  selectedIcon: {
    fontSize: 21,
    float: "left",
    lineHeight: 30,
    width: "30px !important",
    textAlign: "center",
    marginRight: 15,
  },
  nestedMenuWrapper: {
    backgroundColor: "white",
    marginTop: "0.5rem",
    borderRadius: 4,
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
  },
  logo: {
    width: 160,
    height: 160,
    resize: "contain",
    cursor: "pointer",
  },
}));

const DashboardLayout = (props) => {
  const matches = useMediaQuery("(min-height:400px)");
  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();
  const { appState } = useSelector((state) => state);

  const { sidebarDrawerToggleState } = appState;

  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    setToggleMenu(sidebarDrawerToggleState);
  }, [sidebarDrawerToggleState]);

  const tabs = [
    {
      icon: faHome,
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: faUserPlus,
      name: "Add User",
      path: "/addUser",
    },
    {
      icon: faDice,
      name: "All Games",
      path: "/gameList",
    },

    {
      icon: faIdBadge,
      name: "Update Profile",
      path: "/updateProfile",
    },
    {
      icon: faSignOutAlt,
      name: "Logout",
      path: "/admin/login",
    },
  ];

  useEffect(() => {
    if (isWidthUp("md", props.width)) {
      dispatch(handleSidebarDrawerToggleStateAction(true));
    } else if (isWidthDown("md", props.width)) {
      dispatch(handleSidebarDrawerToggleStateAction(false));
    }
  }, [props.width]);

  const tabItem = localStorage.getItem("tabItem");

  const handleTabClick = (event, name, index, path, isTerminalTab) => {
    if (name === "Logout") {
      localStorage.removeItem("token");
    }
    if (!isTerminalTab) {
      dispatch(handleNavigationStateAction(index, false));
      setToggleMenu(false);
      history.push(path);
    } else {
      handleToggleMenuTab();
    }
  };

  const handleToggleMenuTab = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const path = window.location.pathname;

    const urlIndex = tabs.findIndex((item) => {
      return item.path === path;
    });

    urlIndex >= 0 && dispatch(handleNavigationStateAction(urlIndex, false));
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant={!isWidthUp("md", props.width) ? "temporary" : "persistent"}
        anchor="left"
        open={sidebarDrawerToggleState}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={!isWidthUp("md", props.width) ? "right" : "left"}
        onClose={() =>
          toggleMenu
            ? dispatch(handleSidebarDrawerToggleStateAction(false))
            : dispatch(handleSidebarDrawerToggleStateAction(true))
        }
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div className={classes.drawerLogo}>
          <img
            src={
              "data:image/png;base64,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"
            }
            alt=""
            className={classes.logo}
            // onError={(e) => {
            //   e.target.onerror = null;
            //   e.target.src = AppImages.noImage;
            // }}
            onClick={() => history.push("/dashboard")}
          />
        </div>
        <Divider variant="middle" />
        <List classes={{ padding: classes.listPadding }}>
          <div className={classes.sidebarList}>
            {tabs.map(({ icon, iconWhite, name, path }, index) => {
              let isTerminalTab = name == "Terminal Management" ? true : false;
              let isSelectedtab = tabItem == index ? true : false;
              let iconTheme = {
                color: "red",
                position: "absolute",
                right: 7.5,
              };
              return (
                <React.Fragment key={name}>
                  <ListItem
                    onClick={(event) =>
                      handleTabClick(event, name, index, path, isTerminalTab)
                    }
                  >
                    <div
                      className={
                        isSelectedtab ? "sidebarBtnSelected" : "sidebarBtn"
                      }
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        color={isSelectedtab ? "#ffffff" : "#a9afbb"}
                        className={clsx([
                          classes.icon,
                          isSelectedtab && classes.seletcedTabIcon,
                        ])}
                      />
                      <p
                        className={
                          isSelectedtab
                            ? "sidebarBtnTextSelected"
                            : "sidebarBtnText"
                        }
                      >
                        {name}
                      </p>
                    </div>
                  </ListItem>
                </React.Fragment>
              );
            })}
          </div>
        </List>
        <div className="sidebarBackground" style={{ zIndex: -7 }} />
      </Drawer>
    </div>
  );
};

export default withWidth()(DashboardLayout);
