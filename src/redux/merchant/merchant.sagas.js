import { put, call } from 'redux-saga/effects'
import BrandApi from '../../services/BrandApi'
import { fetchBrandsFail, fetchBrandsSuccess } from './brand.actions';

export function* fetchBrands(){
    try{
        const brands = yield call(BrandApi.get);
        yield put(fetchBrandsSuccess(brands));
    }catch(error){
        yield put(fetchBrandsFail(error));
    }
}