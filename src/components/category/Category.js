import React from "react";
import { connect } from "react-redux";
import { setCategory } from "../../redux/category/category.actions";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const DEFAULT_BRAND_ID = "5fdd8c741569e96aeabb68ec";

const useStyles = makeStyles(() => ({
  container: {
    boxShadow: "0 1px 10px #ccc",
  },
  root: {
    paddingLeft: 0,
    margin: 0,
    listStyleType: "none",
    overflow: "auto",
    whiteSpace: "nowrap",
    '&::-webkit-scrollbar': {
      display: "none",
    },
  },
  li: {
    padding: "10px 20px",
    textDecoration: "none",
    display: "inline-block",
    boxSizing: "border-box",
    borderBottom: "3px solid #fff",
    '&:hover': {
      background: "#eee",
      borderBottom: "3px solid #3f51b5",
    },
    '&:active': {
      background: "#eee",
      borderBottom: "3px solid #3f51b5",
    }
  },
  liActive: {
    padding: "10px 20px",
    textDecoration: "none",
    display: "inline-block",
    boxSizing: "border-box",
    background: "#eee",
    borderBottom: "3px solid #3f51b5",
  },
  link: {
    color: "#333",
    textDecoration: "none",
  }
}));

const Category = ({ data, brand, category, onSelect }) => {
  const classes = useStyles();

  const handleSelected = (category) => {
    setCategory(category);
    onSelect(category);
  };

  return (
    <div className={classes.container}>
      <ul className={classes.root}>
        {data &&
          data.length &&
          data.map((c) => (
            <li
              className={category && c._id === category._id ? classes.liActive : classes.li}
              key={c._id}
              onClick={() => handleSelected(c)}
            >
              <div className={classes.link}>
                {c.name}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  brand: state.brand,
  category: state.category
});

export default connect(mapStateToProps, { setCategory })(Category);