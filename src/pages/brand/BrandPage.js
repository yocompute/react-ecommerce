import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import queryString from "query-string";
import Cookies from 'js-cookie';
import { makeStyles } from "@material-ui/core/styles";

import ProductList from "../../components/product/ProductList";
import ProductGrid from "../../components/product/ProductGrid";
import { fetchProducts } from "../../redux/product/product.actions";
import { fetchBrand } from "../../redux/brand/brand.actions";
import { setPage } from "../../redux/page/page.actions";
import { setQrcode } from "../../redux/qrcode/qrcode.actions";

import { BRAND_PAGE } from "../../const";
import CartRow from "../../components/cart/CartRow";

import { selectCategoryMap } from "../../redux/product/product.selectors";
import { selectQuantity } from "../../redux/cart/cart.selectors";
import { login } from "../../redux/auth/auth.actions";
import { selectAuthUser } from "../../redux/auth/auth.selectors";
import { setCategory } from "../../redux/category/category.actions";

import { BRAND_COOKIE, QRCODE_COOKIE, JWT_EXPIRY } from '../../const';

const useStyles = makeStyles(() => ({
  page: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0px",
  },
  products: {
    margin: 0,
  },
}));

const BrandPage = ({
  user,
  location,
  nProducts,
  categoryMap,
  products,
  login,
  fetchBrand,
  fetchProducts,
  setQrcode,
  setPage,
  setCategory,
  match,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if(!user){
      login({
        username: 'Guest',
        email: process.env.REACT_APP_GUEST_EMAIL,
        password: process.env.REACT_APP_GUEST_PASSWORD,
      });
    }
  }, []);

  useEffect(() => {
    const params = queryString.parse(location.search);
    if (user) {
      setPage(BRAND_PAGE);
      if (params.brandId && params.qrcode) {
        const {brandId, qrcode} = params;
        fetchBrand({ _id: brandId });
        fetchProducts({ brand: brandId, type: { $ne: 'A' } });
        setQrcode({ _id: qrcode });
        Cookies.set(BRAND_COOKIE, brandId, { expires: JWT_EXPIRY });
        Cookies.set(QRCODE_COOKIE, qrcode, { expires: JWT_EXPIRY });
      } else if (match.params && match.params.id) { // for multi brand
        const brand = match.params.id;
        fetchBrand({ _id: brand });
        fetchProducts({ brand, type: { $ne: 'A' } });
      } else {
        const brandId = Cookies.get(BRAND_COOKIE);
        const qrcode = Cookies.get(QRCODE_COOKIE);
        if(brandId && qrcode){
          fetchBrand({ _id: brandId });
          fetchProducts({ brand: brandId, type: { $ne: 'A' } });
          setQrcode({ _id: qrcode });
        }
      }
    }
    // else {
    //   const brand = DEFAULT_BRAND_ID;
    //   fetchBrand({ _id: brand });
    //   fetchProducts({ brand, type: {$ne: 'A'} });
    //   setPage(BRAND_PAGE);
    // }
  }, [fetchBrand, fetchProducts, location.search, setPage, setQrcode, user]);

  useEffect(() => {
    if(categoryMap && Object.values(categoryMap).length >0){
      setCategory(Object.values(categoryMap)[0]);
    }
  }, [categoryMap]);

  return (
    <div className={classes.page}>
      {window.matchMedia(`(max-width: 768px)`).matches ? (
        <div className={classes.products}>
          <ProductList data={categoryMap} />
          {
            nProducts > 0 &&
            <CartRow />
          }
        </div>
      ) : (
          <div>
            <ProductGrid data={products} />
            <CartRow />
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
  user: selectAuthUser(state),
  categoryMap: selectCategoryMap(state),
  nProducts: selectQuantity(state),
  products: state.products,
});

export default connect(mapStateToProps, {
  fetchProducts,
  fetchBrand,
  setQrcode,
  setPage,
  login,
  setCategory,
})(BrandPage);
