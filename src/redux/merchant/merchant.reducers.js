
import {FETCH_MERCHANTS_SUCCESS, SET_MERCHANT} from '../brand/brand.actions';

export const brandsReducer = (state=null, action) => {
    if(action && action.type === FETCH_MERCHANTS_SUCCESS){
        return [ ...action.brands ];
    }
    return state;
}

export const brandReducer = (state=null, action) => {
    if(action && action.type === SET_MERCHANT){
        return { ...action.brand};
    }
    return state;
}