import { put, call, select, takeLatest } from 'redux-saga/effects'

import { FETCH_BRANDS, FETCH_BRAND, CREATE_BRAND, UPDATE_BRAND, 
    fetchBrandsSuccess, fetchBrandsFail, fetchBrandSuccess, fetchBrandFail, createBrandSuccess, updateBrandSuccess } from './brand.actions'

import BrandApi from '../../services/BrandApi';

export function* fetchBrands(action){
    try{
        const brands = yield call(BrandApi.get, action.query);
        yield put(fetchBrandsSuccess(brands));
    }catch(error){
        yield put(fetchBrandsFail(error));
    }
}

export function* fetchBrand(action){
    try{
        const brands = yield call(BrandApi.get, action.query);
        if(brands && brands.length > 0){
            yield put(fetchBrandSuccess(brands[0]));
        }else{
            yield put(fetchBrandFail('No Brands available'));
        }
    }catch(error){
        yield put(fetchBrandFail(error));
    }
}

export function* createBrand(action) {
    try {
        const brands = yield call(BrandApi.create, action.data);
        yield put(createBrandSuccess(brands));
    } catch (error) {
        // yield put(addError({
        //     ...error
        // }))
    }
}

export function* updateBrand(action) {
    try {
        const brands = yield call(BrandApi.update, action.data);
        yield put(updateBrandSuccess(brands));

    } catch (error) {
        // yield put(addError({
        //     ...error
        // }))
    }
}

export function* watchBrands(){
    yield takeLatest(FETCH_BRANDS, fetchBrands);
    yield takeLatest(FETCH_BRAND, fetchBrand);
    yield takeLatest(CREATE_BRAND, createBrand);
    yield takeLatest(UPDATE_BRAND, updateBrand);
}