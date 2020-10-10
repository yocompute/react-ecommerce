import {all} from 'redux-saga/effects'
import { watchFetchProducts } from "./product/product.sagas";
// import { watchCreatePayment } from "./payment/payment.sagas";

export default function *rootSaga(){
    yield all([
        watchFetchProducts(),
        // watchCreatePayment()
    ])
}