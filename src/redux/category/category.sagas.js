import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  fetchCategoriesSuccess,
  fetchCategoriesFail,
  fetchCategorySuccess,
  fetchCategoryFail,
  setCategory,
} from "./category.actions";
import CategoryApi from "../../services/CategoryApi";

import { setNotification } from '../notification/notification.actions';
import { httpSuccess } from '../notification/notification.sagas';

export function* fetchCategories(action) {
  try {
    const {data, error, status} = yield call(CategoryApi.get, action.query);
    if(httpSuccess(status)){
      yield put(fetchCategoriesSuccess(data));
      yield put(setCategory(data[0]));
    }else{
      yield put(setNotification(error, status));
    }
  } catch (error) {
    yield put(fetchCategoriesFail(error));
  }
}


export function* fetchCategory(action) {
  try {
    const {data, error, status} = yield call(CategoryApi.get, action.query);
    if(httpSuccess(status)){
      yield put(fetchCategorySuccess(data[0]));
    }else{
      yield put(setNotification(error, status));
    }
  } catch (error) {
    yield put(fetchCategoryFail("error"));
  }
}

export function* watchCategories() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
  yield takeLatest(FETCH_CATEGORY, fetchCategory);
}