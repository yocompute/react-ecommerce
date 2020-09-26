import ProductApi from '../services/ProductApi';

const ACTION_PRODUCT = {
    FETCH_PRODUCTS: 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    SET_PRODUCT: 'SET_PRODUCT'
};

export const fetchProductsAsync = (payload) => ({
    type: ACTION_PRODUCT.FETCH_PRODUCTS,
    payload
})

export const setProduct = (payload) => ({
    type: ACTION_PRODUCT.SET_PRODUCT,
    payload
})

export default ACTION_PRODUCT;