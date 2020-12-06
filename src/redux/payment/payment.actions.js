// action types
export const FETCH_PAYMENTS = 'payment/FETCH_PAYMENTS';
export const FETCH_PAYMENTS_SUCCESS = 'payment/FETCH_PAYMENTS_SUCCESS';
export const FETCH_PAYMENTS_FAIL = 'payment/FETCH_PAYMENTS_FAIL';

export const SET_PAYMENT = 'payment/SET_PAYMENT';

export const CREATE_PAYMENT = 'payment/CREATE_PAYMENT';
export const CREATE_PAYMENT_SUCCESS = 'payment/CREATE_PAYMENT_SUCCESS';
export const CREATE_PAYMENT_FAIL = 'payment/CREATE_PAYMENT_FAIL';

export const UPDATE_PAYMENT = 'payment/UPDATE_PAYMENT';
export const UPDATE_PAYMENT_SUCCESS = 'payment/UPDATE_PAYMENT_SUCCESS';
export const UPDATE_PAYMENT_FAIL = 'payment/UPDATE_PAYMENT_FAIL';

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


export const createPayment = (d) => ({
    type: CREATE_PAYMENT,
    data: d.data,
    history: d.history
})

export const createPaymentSuccess = (payment) => ({
    type: CREATE_PAYMENT_SUCCESS,
    payment
})

export const createPaymentFail = error => ({
    type: CREATE_PAYMENT_FAIL,
    error
})

export const updatePayment = (data) => ({
    type: UPDATE_PAYMENT,
    data
})

export const updatePaymentSuccess = (payment) => ({
    type: UPDATE_PAYMENT_SUCCESS,
    payment
})

export const setPayment = payment => ({
    type: SET_PAYMENT,
    payment
})