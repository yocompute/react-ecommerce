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
    padding: "17px 20px",
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
  link: {
    color: "#333",
    textDecoration: "none",
  }
}));

const Category = ({ data, brand }) => {
  const classes = useStyles();

  const handleSelected = (category) => {
    setCategory(category);
  };

  return (
    <div className={classes.container}>
      <ul className={classes.root}>
        {data &&
          data.length &&
          data.map((category) => (
            <li
              className={classes.li}
              key={category._id}
              onClick={() => handleSelected(category)}
            >
              <Link
                className={classes.link}
                to={{
                  pathname: `/brands/${
                    brand ? brand._id : DEFAULT_BRAND_ID
                  }/categories/${category._id}`,
                }}
              >
                {category.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  brand: state.brand,
});

export default connect(mapStateToProps, { setCategory })(Category);
