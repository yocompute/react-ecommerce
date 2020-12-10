import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// import ProductList from '../components/product/ProductList';
import ProductGrid from "../../components/product/ProductGrid";
import { fetchProducts } from "../../redux/product/product.actions";
import { fetchBrand } from "../../redux/brand/brand.actions";
import Category from "../../components/category/Category.js";
// import Header from '../components/common/Header'
import Footer from "../../layout/Footer";

import "./BrandPage.scss";

const DEFAULT_BRAND_ID = "5fcfa61d005977b4d5e73e2d";

const BrandPage = ({ match, fetchBrand, fetchProducts, products }) => {
  useEffect(() => {
    if (match.params && match.params.id) {
      const brand = match.params.id;
      fetchBrand({ _id: brand });
      fetchProducts({ brand });
    } else {
      const brand = DEFAULT_BRAND_ID;
      fetchBrand({ _id: brand });
      fetchProducts({ brand });
    }
  }, [fetchProducts]);

  const handleNext = () => {};
  return (
    <div className="page">
      {/* <Header title={'Home Page'}></Header> */}
      <div className="product-list-area">
        <Category />
        <ProductGrid data={products} />
      </div>
      {/* <SignupSelect></SignupSelect> */}

      <Footer type="menu" enable={true} onNext={handleNext} amount={0}></Footer>
    </div>
  );
};

BrandPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, {
  fetchProducts,
  fetchBrand,
})(BrandPage);
