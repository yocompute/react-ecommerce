import React from "react";
import CategoryItem from "./CategoryItem";
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";

// import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
// import FastfoodIcon from "@material-ui/icons/Fastfood";
// import LocalDiningIcon from "@material-ui/icons/LocalDining";
// import CakeIcon from "@material-ui/icons/Cake";

const useStyles = makeStyles(() => ({
  root: {
    padding: "0 11px",
    flex: "0.3",
    // position: "fixed",
  },
}));

// createUTC: "2020-12-12T01:44:35.579Z"
// description: "Drink - description"
// name: "Drink"
// owner: {createUTC: "2020-12-06T00:17:12.726Z", _id: "5fcc2308390abab1b3d0fa1e", username: "123456", email: "123456@gmail.com", __v: 0}
// status: "A"
// __v: 0
// _id: "5fd44afbd142f9414b358218"
// __proto__: Object

const Category = ({ data }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <div className={classes.wrap}>
        {data &&
          data.length &&
          data.map((category) => (
            <CategoryItem key={category._id} category={category} />
          ))}
      </div>
    </List>
  );
};

export default Category;
