import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import "./CategoryItem.scss";

const useStyles = makeStyles(() => ({
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  categoryItem: {
    paddingLeft: 13,
    paddingRight: 10,
  },
  categoryIcon: {
    minWidth: 30,
  },
  categoryText: {
    marginTop: 7,
  }
}));

const NavMenuItem = ({ data }) => {
  const classes = useStyles();
  return (
    <NavLink to={data.path} className={classes.link}>
      <Tooltip title={data.tip} TransitionComponent={Fade} placement="right">
        <ListItem className={classes.categoryItem} button>
          <ListItemIcon className={`${classes.categoryIcon} category-icon`}>
            {data.icon}
          </ListItemIcon>
          <ListItemText className={`${classes.categoryText} category-text`}>{data.text}</ListItemText>
        </ListItem>
      </Tooltip>
    </NavLink>
  );
};

export default NavMenuItem;
