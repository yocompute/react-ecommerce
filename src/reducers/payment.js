

import ACTION_PAYMENT from '../actions/payment';
export const payments = (state=null, action) => {
    if(action && action.type === ACTION_PAYMENT.FETCH_PAYMENTS_SUCCESS){
        return [ ...action.payload.data ];
    }
    return state;
}

export const payment = (state=null, action) => {
    if(action && action.type === ACTION_PAYMENT.SET_PAYMENT){
        return { ...action.payload};
    }
    return state;
}