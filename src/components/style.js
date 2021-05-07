import { makeStyles } from "@material-ui/core/styles";

import AppColors from "../themes/appColors";

const drawerWidth = 260;
export const useStyles = makeStyles((theme) => ({
  // ======> InputField Component <======
  my: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  // ======> AppBar Component <======
  breadIcon: {
    width: 24,
    marginBottom: 4,
  },
  appBar: {
    backgroundColor: "transparent",
    height: 60,
    position: "relative",
    marginBottom: "1.25rem !important",
  },
  appBarShift: {
    padding: "1%",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    disabledButton: {
      backgroundColor: "green" || "red",
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
  breadcrumbIcon: {
    fontSize: 22,
    marginTop: 10,
  },
  icon: {
    fontSize: 22,
    marginRight: 15,
    float: "left",
  },
  // ======> Button Component <======
  button: {
    backgroundColor: AppColors.primary,
    borderColor: AppColors.primary,
    borderRadius: 3,
    padding: "0px 30px",
    fontWeight: 500,
    height: 38,
    "&:hover": {
      backgroundColor: AppColors.mainColor,
      borderColor: AppColors.mainColor,
      outline: "none",
    },
    "&:focus": {
      backgroundColor: AppColors.mainColor,
      borderColor: AppColors.mainColor,
      outline: "none",
    },
    "&:active": {
      backgroundColor: AppColors.mainColor,
      borderColor: AppColors.mainColor,
    },
    fontSize: 14,

    marginRight: "1rem",
  },
  mb: {
    marginBottom: "2rem",
  },
  mt20: {
    marginTop: 20,
  },

  RequestButtonpadding: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  bg: {
    backgroundColor: AppColors.mainColor,
    borderColor: AppColors.mainColor,
    color: "white",
    alignSelf: "center",
    marginTop: 10,
  },
  wd: {
    width: 120,
  },
  noBg: {
    backgroundColor: "transparent",
    outline: 0,
    background: "transparent",
  },
  // ======> Breadcrumbs Component <======

  breadcrumbLink: {
    color: `${AppColors.mainColor} !important`,
    "&:hover": {
      color: `${AppColors.mainColor} !important`,
    },
  },
  content: {
    marginRight: 20,
    marginLeft: 20,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),

    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      paddingLeft: "3.5%",
      paddingRight: "2%",
      paddingTop: "0.5%",
      paddingBottom: "1%",
    },
  },
  headerInline: {
    [theme.breakpoints.down("md")]: {},
  },
  breadcrumbs: {
    padding: 15,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
  },
  separator: {
    display: "inline-block",
    margin: "0 2px",
  },
  breadcrumbIcon: {
    width: "21px !important",
    fontSize: 21,
    verticalAlign: "baseline",
    cursor: "pointer",
  },
  breadcrumbItem: {
    margin: "0 2px",
  },
  breadcrumbLink: {
    cursor: "pointer",
    color: AppColors.mainColor,
    "&:hover": {
      color: `${AppColors.mainColor} !important`,
    },
  },
}));
