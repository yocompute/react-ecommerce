import ACTION_MERCHANT from '../actions/merchant'


export const merchant = (state=null, action) => {
    if(action && action.type === ACTION_MERCHANT.SET_MERCHANT){
        return { ...action.payload};
    }
    return state;
}