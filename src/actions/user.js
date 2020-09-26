import UserApi from '../services/UserApi';

const ACTION_USER = {
    FETCH_USERS: 'FETCH_USERS',
    FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
    SET_USER: 'SET_USER'
};

export const fetchUsersAsync = (payload) => ({
    type: ACTION_USER.FETCH_USERS,
    payload
})

export const setUser = (payload) => ({
    type: ACTION_USER.SET_USER,
    payload
})

export default ACTION_USER;