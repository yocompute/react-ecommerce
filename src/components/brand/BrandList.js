import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { setBrand } from "../../redux/brand/brand.actions";

import { makeStyles } from "@material-ui/core/styles";

// import DefaultImage from '../../assets/Default-Image.jpg'
import DefaultBrand from "../../assets/defaultBrand.jpg";
const useStyles = makeStyles((theme) => ({
  brandRow: {
    width: "100%",
    display: "block",
    height: "230px",
    textDecoration: "none",
  },
  picWrapper: {
    width: "100%",
    height: "140px",
  },
  image: {
    backgroundSize: "cover",
  },
  textWrapper: {
    width: "100%",
    height: "90px",
    padding: "15px",
  },
  brandName: {
    color: "#333",
    fontSize: "18px",
  },
  distance: {
    color: "#666",
    fontSize: "14px",
  },
}));

const BrandList = ({ data, setBrand }) => {
  const classes = useStyles();

  function handleSelect(brand) {
    setBrand(brand);
  }

  function getPictureUrl(d) {
    return process.env.PUBLIC_URL + "/defaultBrand.jpg"; // d.pictures[0];
  }
  
  return data && data.length ? (
    data.map((d) => (
      <Link
        key={d._id}
        className={classes.brandRow}
        to={{ pathname: `/brands/${d._id}` }}
        onClick={(e) => handleSelect(d)}
      >
        <div className={classes.picWrapper}>
          <img className={classes.image} src={DefaultBrand} alt="" />
        </div>
        <div className={classes.textWrapper}>
          <div className={classes.brandName}>{d.name}</div>
          <div className={classes.distance}>20 - 30 Min 1.5KM</div>
        </div>
      </Link>
    ))
  ) : (
    <div>No Available Brands</div>
  );
};

const mapStateToProps = (state) => ({
//   brand: state.brand,
});

export default connect(mapStateToProps, { setBrand })(BrandList);
