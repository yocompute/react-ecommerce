import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import ProductList from "../../components/product/ProductList";
import ProductGrid from "../../components/product/ProductGrid";
import { fetchProducts } from "../../redux/product/product.actions";
import { fetchCategories } from "../../redux/category/category.actions";
import { fetchBrand } from "../../redux/brand/brand.actions";
import { fetchCategory } from "../../redux/category/category.actions";
import { setPage } from "../../redux/page/page.actions";
import { CATEGORY_PAGE } from "../../const";
import CategoryTabs from "../../components/category/CategoryTabs";

const DEFAULT_CATEGORY_ID = "5fd44afbd142f9414b358218";

const useStyles = makeStyles((theme) => ({
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

const CategoryPage = ({
  brand,
  categories,
  match,
  fetchBrand,
  fetchCategories,
  fetchProducts,
  products,
  setPage,
}) => {
  const classes = useStyles();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    if (match.params && match.params.id_brand && match.params.id_category) {
      const brand = match.params.id_brand;
      fetchBrand({ _id: brand });
      const category = match.params.id_category;
      fetchCategory({ _id: category });
      fetchProducts({ brand, category });
      setPage(CATEGORY_PAGE);
    } else {
      const category = DEFAULT_CATEGORY_ID;
      fetchCategory({ _id: category });
      fetchProducts({ category });
      setPage(CATEGORY_PAGE);
    }
  }, [fetchBrand, fetchProducts, match.params, match.params.id_category, setPage]);

  return (
    <div className={classes.page}>
      <CategoryTabs className={classes.categories} data={categories} />
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

CategoryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  brand: state.brand,
  categories: state.categories,
  products: state.products,
});

export default connect(mapStateToProps, {
  fetchBrand,
  fetchProducts,
  fetchCategories,
  fetchCategory,
  setPage,
})(CategoryPage);
