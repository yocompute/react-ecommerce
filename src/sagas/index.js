import {all} from 'redux-saga/effects'
import { watchFetchProducts } from "./product";
import { watchCreatePayment } from "./payment";

export default function *rootSaga(){
    yield all([
        watchFetchProducts(),
        watchCreatePayment()
    ])
}