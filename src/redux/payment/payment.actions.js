// action types
export const FETCH_PAYMENTS = 'payment/FETCH_PAYMENTS';
export const FETCH_PAYMENTS_SUCCESS = 'payment/FETCH_PAYMENTS_SUCCESS';
export const FETCH_PAYMENTS_FAIL = 'payment/FETCH_PAYMENTS_FAIL';

export const SET_PAYMENT = 'payment/SET_PAYMENT';

export const CREATE_PAYMENT = 'user/CREATE_PAYMENT';
export const CREATE_PAYMENT_SUCCESS = 'user/CREATE_PAYMENT_SUCCESS';
export const CREATE_PAYMENT_FAIL = 'user/CREATE_PAYMENT_FAIL';

export const UPDATE_PAYMENT = 'user/UPDATE_PAYMENT';
export const UPDATE_PAYMENT_SUCCESS = 'user/UPDATE_PAYMENT_SUCCESS';
export const UPDATE_PAYMENT_FAIL = 'user/UPDATE_PAYMENT_FAIL';

// action creators
export const fetchPayments = (payload) => ({
    type: FETCH_PAYMENTS
})

export const fetchPaymentsSuccess = (payments = []) => ({
    type: FETCH_PAYMENTS_SUCCESS,
    payments
})

export const fetchPaymentsFail = (error) => ({
    type: FETCH_PAYMENTS_FAIL,
    error
})


export const createPayment = (data) => ({
    type: CREATE_PAYMENT,
    data
})

export const createPaymentSuccess = (user) => ({
    type: CREATE_PAYMENT_SUCCESS,
    user
})

export const createPaymentFail = error => ({
    type: CREATE_PAYMENT_FAIL,
    error
})

export const updatePayment = (data) => ({
    type: UPDATE_PAYMENT,
    data
})

export const updatePaymentSuccess = (user) => ({
    type: UPDATE_PAYMENT_SUCCESS,
    user
})

export const setPayment = payment => ({
    type: SET_PAYMENT,
    payment
})