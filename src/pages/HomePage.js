import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import BrandList from "../components/brand/BrandList";
import BrandGrid from "../components/brand/BrandGrid";
import CartRow from "../components/cart/CartRow";
import { HOME_PAGE } from "../const";

import { setPage } from "../redux/page/page.actions";
import { fetchBrands } from "../redux/brand/brand.actions";
import { selectQuantity } from "../redux/cart/cart.selectors";

// import './HomePage.scss'

const useStyles = makeStyles((theme) => ({
  page: {
    width: "100%",
    position: "absolute",
    top: 56,
    height: "calc(100% - 180px}",
  },
}));

const HomePage = ({ match, setPage, fetchBrands, brands, nProducts }) => {
  const classes = useStyles();
  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  useEffect(() => {
    setPage(HOME_PAGE);
  }, [setPage]);

  return (
    <div className={classes.page}>
      {window.matchMedia(`(max-width: 768px)`).matches ? (
        <div>
          <BrandList data={brands} />
          {
                nProducts > 0 &&
                <CartRow />
          }
        </div>
      ) : (
        <div>
          <BrandGrid data={brands} />
        </div>
      )}
    </div>
  );
};

HomePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  nProducts: selectQuantity(state),
  brands: state.brands,
});

export default connect(mapStateToProps, {
  setPage,
  fetchBrands,
})(HomePage);
