export const FETCH_CATEGORIES = "category/FETCH_CATEGORIES";
export const FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAIL = "category/FETCH_CATEGORIES_FAIL";
export const FETCH_CATEGORY_SUCCESS = "category/FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_FAIL = "category/FETCH_CATEGORY_FAIL";
export const SET_CATEGORY = "category/SET_CATEGORY";
export const FETCH_CATEGORY = "category/FETCH_CATEGORY";

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const fetchCategoriesSuccess = (categories = []) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  categories,
});

export const fetchCategoriesFail = (error) => ({
  type: FETCH_CATEGORIES_FAIL,
  error,
});

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

export const fetchCategory = () => ({
  type: FETCH_CATEGORY,
});

export const fetchCategorySuccess = (categories = []) => ({
  type: FETCH_CATEGORY_SUCCESS,
  categories,
});

export const fetchCategoryFail = (error) => ({
  type: FETCH_CATEGORY_FAIL,
  error,
});

