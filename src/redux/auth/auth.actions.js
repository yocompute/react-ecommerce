// action types
export const FETCH_AUTH = 'auth/FETCH_AUTH';
export const FETCH_AUTH_SUCCESS = 'auth/FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_FAIL = 'auth/FETCH_AUTH_FAIL';


export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'auth/LOGIN_FAIL';

export const SIGNUP = 'auth/SIGNUP';
export const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'auth/SIGNUP_FAIL';

export const SET_AUTH = 'auth/SET_AUTH';

// action creators
export const fetchAuth = () => ({
    type: FETCH_AUTH
})

export const fetchAuthSuccess = (auths = []) => ({
    type: FETCH_AUTH_SUCCESS,
    auths
})

export const fetchAuthFail = error => ({
    type: FETCH_AUTH_FAIL,
    error
})

export const setAuth = (payload) => ({
    type: SET_AUTH,
    payload
})

export const login = (data) => ({
    type: LOGIN,
    data
})

export const loginSuccess = (auth) => ({
    type: LOGIN_SUCCESS,
    auth
})

export const loginFail = error => ({
    type: LOGIN_FAIL,
    error
})

export const createUser = (data) => ({
    type: SIGNUP,
    data
})

export const createUserSuccess = (auth) => ({
    type: SIGNUP_SUCCESS,
    auth
})

export const createUserFail = error => ({
    type: SIGNUP_FAIL,
    error
})