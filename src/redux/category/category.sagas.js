import { put, call, takeLatest } from "redux-saga/effects";
import { FETCH_CATEGORIES, FETCH_CATEGORY } from "./category.actions";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFail,
  fetchCategorySuccess,
  fetchCategoryFail,
} from "../../redux/category/category.actions";
import CategoryApi from "../../services/CategoryApi";

export function* fetchCategories(action) {
  try {
    const categories = yield call(CategoryApi.get, action.query);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFail(error));
  }
}

export function* fetchCategory(action) {
  try {
    const categories = yield call(CategoryApi.get, action.query);
    if (categories && categories.length > 0) {
      yield put(fetchCategorySuccess(categories[0]));
    } else {
      yield put(fetchCategoryFail("No Categories Available"));
    }
  } catch (error) {
    yield put(fetchCategoryFail("error"));
  }
}

export function* watchCategories() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
  yield takeLatest(FETCH_CATEGORY, fetchCategory);
}
