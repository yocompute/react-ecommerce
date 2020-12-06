import { put, call, takeLatest } from 'redux-saga/effects';


import PaymentApi from '../../services/PaymentApi'
import { FETCH_PAYMENTS, CREATE_PAYMENT,
    fetchPaymentsFail, fetchPaymentsSuccess, createPaymentSuccess, createPaymentFail } from './payment.actions';
import { clearCart } from '../cart/cart.actions';

export function* fetchPayments(query){
    try{
        const payments = yield call(PaymentApi.get, query);
        yield put(fetchPaymentsSuccess(payments));
    }catch(error){
        yield put(fetchPaymentsFail(error));
    }
}


// export function* fetchPayments(action){
//     try{
//         const payload = yield call(PaymentApi.getPayments, action.payload)
//         yield put({type: 'FETCH_PAYMENTS_SUCCESS', payload})
//     } catch (error){
//         yield put({type: 'FETCH_PAYMENTS_FAIL', error})
//     }
// }

export function* createPayment(action){
    try{
        const payment = yield call(PaymentApi.create, action.data);
        yield put(createPaymentSuccess(payment));
        yield call(action.history.push, '/payments');
        yield put(clearCart());
    } catch (error){
        yield put(createPaymentFail(error));
    }
}


export function* watchPayments(){
    yield takeLatest(FETCH_PAYMENTS, fetchPayments)
    yield takeLatest(CREATE_PAYMENT, createPayment)
}