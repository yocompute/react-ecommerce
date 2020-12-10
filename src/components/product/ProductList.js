import React, { useState } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";

import { QuantityInput } from "../common/QuantityInput";
import { Link } from "react-router-dom";
import { setProduct } from "../../redux/product/product.actions";

import DefaultImage from "../../assets/Default-Image.jpg";
import "./ProductList.scss";

const ProductList = ({ data, setProduct }) => {
  // const [quantity, setQuantity] = useState(0);

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
  return data && data.length ? (
    data.map((d) => (
      <Link
        key={d._id}
        style={{ textDecoration: "none" }}
        to={{ pathname: `/products/${d._id}` }}
        onClick={(e) => handleSelect(d)}
      >
        <Grid container className="product-row">
          <Grid item xs={6} m={0} className="pic-col">
            <div>DADGE</div>
            <img src={DefaultImage} alt="" />
          </Grid>
          <Grid item xs={6}>
            <div>{d.name}</div>
            <div>${d.price}</div>
          </Grid>
        </Grid>
      </Link>
    ))
  ) : (
    <div>No Available Products</div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { setProduct })(ProductList);
