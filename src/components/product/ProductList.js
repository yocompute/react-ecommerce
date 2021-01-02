import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { QuantityInput } from "../common/QuantityInput";
import { Link } from "react-router-dom";
import { setProduct } from "../../redux/product/product.actions";

import DefaultImage from "../../assets/defaultProduct.jpg";
// import './ProductList.scss'

const useStyles = makeStyles((theme) => ({
  productRow: {
    width: "100%",
    display: "block",
    boxSizing: "border-box",
    margin: "12px 0px",
  },
  link: {
    textDecoration: "none",
    display: "flex",
  },
  pictureCol: {},
  image: {
    objectFit: "cover",
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  textCol: {
    paddingLeft: 10,
  },
  productName: {
    color: "#333",
    fontSize: 18,
    fontWeight: 500,
    lineHeight: "18px",
    marginBottom: 5,
  },
  price: {
    color: "#aaa",
    fontSize: 18,
    fontWeight: 400,
    marginBottom: 5,
  },
  productDescription: {
    color: "#333",
    fontSize: 15,
    fontWeight: 300,
    letterSpacing: 0.5,
  },
}));

const ProductList = ({ data, setProduct }) => {
  const classes = useStyles();

  function handleSelect(product) {
    setProduct(product);
  }

  // function handleIncrease(v) {

  // }
  // function handleDecrease(v) {

  // }
  // function handleQuantityChange(v) {

  // }

  function getPictureUrl(d) {
    return d.pictures[0];
  }



  return (
    data && Object.keys(data).length > 0 ?
    Object.keys(data).map((categoryName) => (
      data[categoryName].products && data[categoryName].products.length > 0 &&
      <div 
        className={classes.category}
        key={data[categoryName]._id}
        id={data[categoryName]._id}
      >
        <div ref={data[categoryName].ref}>{categoryName}</div>
        {
          data[categoryName].products.map(d =>
            <div className={classes.productRow} key={d._id}>
              <Link
                className={classes.link}
                to={{ pathname: `/products/${d._id}` }}
                onClick={(e) => handleSelect(d)}
              >
                <div className={classes.pictureCol}>
                  <img className={classes.image} src={DefaultImage} alt="" />
                </div>
                <div className={classes.textCol}>
                  <div className={classes.productName}>{d.name}</div>
                  <div className={classes.price}>${d.price}</div>
                  <div className={classes.productDescription}>{d.description}</div>
                </div>
              </Link>
            </div>
          )
        }
      </div>
    ))
    :
    <div>No Category is available</div>
  )
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { setProduct })(ProductList);
