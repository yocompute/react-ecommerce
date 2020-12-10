import React from "react";
import NavMenuItem from "./CategoryItem";
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import CakeIcon from "@material-ui/icons/Cake";

const useStyles = makeStyles(() => ({
  root: {
    flex: 0.2,
    paddingTop: 56,
  },
  wrap: {
    paddingTop: 20,
  },
}));

const categories = [
  {
    path: "/drink",
    text: "Drink",
    icon: <EmojiFoodBeverageIcon />,
    tip: "Drink",
  },
  {
    path: "/fast-food",
    text: "Fast Food",
    icon: <FastfoodIcon />,
    tip: "Fast Food",
  },
  {
    path: "/western-food",
    text: "Western Food",
    icon: <LocalDiningIcon />,
    tip: "Western Food",
  },
  {
    path: "/dessert",
    text: "Dessert",
    icon: <CakeIcon />,
    tip: "Dessert",
  },
];

const Category = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <div className={classes.wrap}>
        {categories &&
          categories.length &&
          categories.map((category) => <NavMenuItem key={category.text} data={category} />)}
      </div>
    </List>
  );
};

export default Category;
