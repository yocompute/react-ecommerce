

import ACTION_PRODUCT from '../actions/product';
export const products = (state=null, action) => {
    if(action && action.type === ACTION_PRODUCT.FETCH_PRODUCTS_SUCCESS){
        return [ ...action.payload.data ];
    }
    return state;
}

export const product = (state=null, action) => {
    if(action && action.type === ACTION_PRODUCT.SET_PRODUCT){
        return { ...action.payload};
    }
    return state;
}