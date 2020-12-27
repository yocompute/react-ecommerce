import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import queryString from 'query-string';

import { makeStyles } from "@material-ui/core/styles";

import ProductList from "../../components/product/ProductList";
import ProductGrid from "../../components/product/ProductGrid";
import { fetchProducts } from "../../redux/product/product.actions";
import { fetchCategories } from "../../redux/category/category.actions";
import { fetchCategory } from "../../redux/category/category.actions";
import { fetchBrand } from "../../redux/brand/brand.actions";
import { setPage } from "../../redux/page/page.actions";
import { setQrcode } from "../../redux/qrcode/qrcode.actions";
import Category from "../../components/category/Category";

import { BRAND_PAGE } from "../../const";

const DEFAULT_BRAND_ID = "5fdd8c741569e96aeabb68ec";

const useStyles = makeStyles((theme) => ({
  page: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0px",
    display: "flex",
  },
  products: {
    flex: 0.7,
  },
}));

const BrandPage = ({ location, match, fetchBrand, fetchProducts, products, setPage, setQrcode }) => {
    const classes = useStyles();
    useEffect(() => {
        const params = queryString.parse(location.search);

        if(params.brandId && params.qrcode){
            fetchBrand({ _id: params.brandId });
            fetchProducts({ brand: params.brandId });
            setPage(BRAND_PAGE);
            setQrcode(params.qrcode);
        }

        // if (match.params && match.params.id) {
        //     const brand = match.params.id;
        //     fetchBrand({ _id: brand });
        //     fetchProducts({ brand });
        //     setPage(BRAND_PAGE);

        //     if(match.params && match.params.qrcode){
        //         setQrcode(match.params.qrcode);
        //     }
        // } 
        else {
            const brand = DEFAULT_BRAND_ID;
            fetchBrand({ _id: brand });
            fetchProducts({ brand });
            setPage(BRAND_PAGE);
        }
    }, [fetchProducts]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (match.params && match.params.id) {
      const brand = match.params.id;
      fetchBrand({ _id: brand });
      fetchProducts({ brand });
      setPage(BRAND_PAGE);
    } else {
      const brand = DEFAULT_BRAND_ID;
      fetchBrand({ _id: brand });
      fetchProducts({ brand });
      setPage(BRAND_PAGE);
    }
  }, [fetchProducts]);

  const handleNext = () => {};

  return (
    <div className={classes.page}>
      <Category className={classes.categories} data={categories} />
      {window.matchMedia(`(max-width: 768px)`).matches ? (
        <div className={classes.products}>
          <ProductList data={products} />
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
  })
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products,
});

export default connect(mapStateToProps, {
  fetchProducts,
  fetchCategories,
  fetchCategory,
  fetchBrand,
  setQrcode,
  setPage,
})(BrandPage);
