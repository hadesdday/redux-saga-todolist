import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BuildIcon from "@material-ui/icons/Build";
import HomeIcon from "@material-ui/icons/Home";
import { withStyles } from "@material-ui/styles";
import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTES } from "../../../constants";
import styles from "./styles";

function Sidebar(props) {
  const { classes, showSidebar, toggleSidebar } = props;

  function toggleDrawer(value) {
    if (toggleSidebar) {
      toggleSidebar(value);
    }
  }

  const renderList = () => (
    <div className={classes.list}>
      <List component="div">
        {ADMIN_ROUTES.map((route, index) => (
          <NavLink
            key={route.path}
            to={route.path}
            exact={route.exact}
            className={classes.menuLink}
            activeClassName={classes.menuLinkActive}
          >
            <ListItem button key={route.path} className={classes.menuItem}>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon /> : <BuildIcon />}
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Drawer
        open={showSidebar}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.drawerPaper }}
        variant={"persistent"}
      >
        {renderList()}
      </Drawer>
    </>
  );
}

export default withStyles(styles)(Sidebar);
