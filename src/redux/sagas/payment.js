import { call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import PaymentApi from '../../services/PaymentApi';

export function* fetchPayments(action){
    try{
        const payload = yield call(PaymentApi.getPayments, action.payload)
        yield put({type: 'FETCH_PAYMENTS_SUCCESS', payload})
    } catch (error){
        yield put({type: 'FETCH_PAYMENTS_FAIL', error})
    }
}

export function* watchFetchPayments(){
    yield takeEvery('FETCH_PAYMENTS', fetchPayments)
}

export function* createPayment(action){
    try{
        const payload = yield call(PaymentApi.createPayment, action.payload)
        yield put({type: 'CREATE_PAYMENT_SUCCESS', payload})
    } catch (error){
        yield put({type: 'CREATE_PAYMENT_FAIL', error})
    }
}

export function* watchCreatePayment(){
    yield takeEvery('CREATE_PAYMENT', createPayment)
}