import { put, call, select, takeLatest } from 'redux-saga/effects'

import { FETCH_PRODUCTS, fetchProductsFail, fetchProductsSuccess } from './product.actions';
import ProductApi from '../../services/ProductApi';

export function* fetchProducts(action){
    try{
        const products = yield call(ProductApi.get, action.query);
        yield put(fetchProductsSuccess(products));
    }catch(error){
        yield put(fetchProductsFail(error));
    }
}

export function* watchProducts(){
    yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}