

import ACTION_USER from '../actions/user';
export const users = (state=null, action) => {
    if(action && action.type === ACTION_USER.FETCH_USERS_SUCCESS){
        return [ ...action.payload.data ];
    }
    return state;
}

export const user = (state=null, action) => {
    if(action && action.type === ACTION_USER.SET_USER){
        return { ...action.payload};
    }
    return state;
}