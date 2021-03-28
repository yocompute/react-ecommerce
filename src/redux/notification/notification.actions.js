// action types
export const SET_NOTIFICATION = 'notification/SET_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'notification/CLEAR_NOTIFICATION';

export const SET_REDIRECT = 'navigation/SET_REDIRECT';
export const CLEAR_REDIRECT = 'navigation/CLEAR_REDIRECT';

// action creators
export const setNotification = (error, status) => ({
    type: SET_NOTIFICATION,
    notification: {
        error,
        status,
        show: true,
    }
})

export const clearNotification = () => ({
    type: CLEAR_NOTIFICATION,
    notification: {
        error: '',
        status: 200,
        show: false,
    }
})


export const setRedirect = (path) => ({
    type: SET_REDIRECT,
    path
})

export const clearRedirect = () => ({
    type: CLEAR_REDIRECT,
})