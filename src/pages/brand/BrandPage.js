import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import queryString from "query-string";

import { makeStyles } from "@material-ui/core/styles";

import ProductList from "../../components/product/ProductList";
import ProductGrid from "../../components/product/ProductGrid";
import { fetchProducts } from "../../redux/product/product.actions";
import { fetchBrand } from "../../redux/brand/brand.actions";
import { setPage } from "../../redux/page/page.actions";
import { setQrcode } from "../../redux/qrcode/qrcode.actions";

import { BRAND_PAGE } from "../../const";
import { selectCategoryMap } from "../../redux/product/product.selectors";

const DEFAULT_BRAND_ID = "5fdd8c741569e96aeabb68ec";

const useStyles = makeStyles(() => ({
  page: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0px",
  },
  products: {
    margin: 20,
  },
}));

const BrandPage = ({
  location,
  categoryMap,
  products,
  fetchBrand,
  fetchProducts,
  setQrcode,
  setPage,
}) => {
  const classes = useStyles();

  useEffect(() => {
    const params = queryString.parse(location.search);

    if (params.brandId && params.qrcode) {
      fetchBrand({ _id: params.brandId });
      fetchProducts({ brand: params.brandId, type: {$ne: 'A'} });
      setPage(BRAND_PAGE);
      setQrcode(params.qrcode);
    } 
    // else if (match.params && match.params.id) {
    //   const brand = match.params.id;
    //   fetchBrand({ _id: brand });
    //   fetchProducts({ brand, type: {$ne: 'A'} });
    //   setPage(BRAND_PAGE);
    // } 
    // else {
    //   const brand = DEFAULT_BRAND_ID;
    //   fetchBrand({ _id: brand });
    //   fetchProducts({ brand, type: {$ne: 'A'} });
    //   setPage(BRAND_PAGE);
    // }
  }, [fetchBrand, fetchProducts, location.search, setPage, setQrcode]);


  return (
    <div className={classes.page}>
      {window.matchMedia(`(max-width: 768px)`).matches ? (
        <div className={classes.products}>
          <ProductList data={categoryMap} />
        </div>
      ) : (
        <div>
          <ProductGrid data={products} />
        </div>
      )}
    </div>
  );
};

BrandPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    history: PropTypes.object,
    location: PropTypes.object,
  }),
};

const mapStateToProps = (state) => ({
  categoryMap: selectCategoryMap(state),
  products: state.products,
});

export default connect(mapStateToProps, {
  fetchProducts,
  fetchBrand,
  setQrcode,
  setPage,
})(BrandPage);
