import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCategory } from "../../redux/category/category.actions";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import "./CategoryItem.scss";

const useStyles = makeStyles(() => ({
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  categoryItem: {
    padding: "10px 0",
  },
  categoryIcon: {
    minWidth: 27,
  },
  categoryText: {
    marginTop: 5,
  },
}));

const CategoryItem = ({ category }) => {
  const classes = useStyles();

  const handleSelected = (category) => {
    setCategory(category);
  };

  return (
    <Link
      to={{ pathname: `/categories/${category._id}` }}
      className={classes.link}
      onClick={() => handleSelected(category)}
    >
      <ListItem className={classes.categoryItem} button>
        <ListItemIcon className={`${classes.categoryIcon} category-icon`}>
          <EmojiFoodBeverageIcon />
        </ListItemIcon>
        <ListItemText className={`${classes.categoryText} category-text`}>
          {category.name}
        </ListItemText>
      </ListItem>
    </Link>
  );
};

export default connect(null, { setCategory })(CategoryItem);
