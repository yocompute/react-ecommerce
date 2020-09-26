import PaymentApi from '../services/PaymentApi';

const ACTION_PAYMENT = {
    FETCH_PAYMENTS: 'FETCH_PAYMENTS',
    FETCH_PAYMENTS_SUCCESS: 'FETCH_PAYMENTS_SUCCESS',
    SET_PAYMENT: 'SET_PAYMENT',
    CREATE_PAYMENT: 'CREATE_PAYMENT'
};

export const fetchPaymentsAsync = (payload) => ({
    type: ACTION_PAYMENT.FETCH_PAYMENTS,
    payload
})

export const setPayment = (payload) => ({
    type: ACTION_PAYMENT.SET_PAYMENT,
    payload
})


export const createPaymentAsync = (payload) => ({
    type: ACTION_PAYMENT.CREATE_PAYMENT,
    payload
})


export default ACTION_PAYMENT;