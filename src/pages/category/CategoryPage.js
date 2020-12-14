import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import ProductList from "../../components/product/ProductList";
import ProductGrid from "../../components/product/ProductGrid";
import { fetchProducts } from "../../redux/product/product.actions";
import { fetchCategories } from "../../redux/category/category.actions";
import { fetchCategory } from "../../redux/category/category.actions";
import { setPage } from "../../redux/page/page.actions";
import { CATEGORY_PAGE } from "../../const";
import Category from "../../components/category/Category";

const DEFAULT_CATEGORY_ID = "5fd44afbd142f9414b358218";

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

const CategoryPage = ({
  categories,
  match,
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
    if (match.params && match.params.id) {
      const category = match.params.id;
      fetchCategory({ _id: category });
      fetchProducts({ category });
      setPage(CATEGORY_PAGE);
    } else {
      const category = DEFAULT_CATEGORY_ID;
      fetchCategory({ _id: category });
      fetchProducts({ category });
      setPage(CATEGORY_PAGE);
    }
  }, [match.params.id]);

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

CategoryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  products: state.products,
});

export default connect(mapStateToProps, {
  fetchProducts,
  fetchCategories,
  fetchCategory,
  setPage,
})(CategoryPage);
