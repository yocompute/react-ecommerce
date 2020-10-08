import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import ProductApi from '../../services/ProductApi';

export function* fetchProducts(action){
    try{
        const payload = yield call(ProductApi.getProducts, action.payload)
        yield put({type: 'FETCH_PRODUCTS_SUCCESS', payload})
    } catch (error){
        yield put({type: 'FETCH_PRODUCTS_FAIL', error})
    }
}

export function* watchFetchProducts(){
    yield takeEvery('FETCH_PRODUCTS', fetchProducts)
}