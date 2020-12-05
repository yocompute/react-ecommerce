// action types
export const FETCH_MERCHANTS = 'brand/FETCH_MERCHANTS';
export const FETCH_MERCHANTS_SUCCESS = 'brand/FETCH_MERCHANTS_SUCCESS';
export const FETCH_MERCHANTS_FAIL = 'brand/FETCH_MERCHANTS_FAIL';

export const SET_MERCHANT = 'brand/SET_MERCHANT';


// action creators
export const fetchBrands = (payload) => ({
    type: FETCH_MERCHANTS
})

export const fetchBrandsSuccess = (brands = []) => ({
    type: FETCH_MERCHANTS_SUCCESS,
    brands
})

export const fetchBrandsFail = (error) => ({
    type: FETCH_MERCHANTS_FAIL,
    error
})

export const setBrand = brand => ({
    type: SET_MERCHANT,
    brand
})