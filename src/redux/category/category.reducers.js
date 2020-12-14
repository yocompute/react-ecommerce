import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_SUCCESS,
  SET_CATEGORY,
} from "./category.actions";

export const categoriesReducer = (state = null, action) => {
  if (action && action.type === FETCH_CATEGORIES_SUCCESS) {
    return [...action.categories];
  }

  return state;
};

export const categoryReducer = (state = null, action) => {
  if (action && action === SET_CATEGORY) {
    return { ...action.category };
  }

  if (action && action === FETCH_CATEGORY_SUCCESS) {
    return { ...action.category };
  }

  return state;
};
