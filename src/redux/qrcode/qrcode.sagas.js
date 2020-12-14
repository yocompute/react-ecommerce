import { put, call, select, takeLatest } from 'redux-saga/effects'

import { FETCH_QRCODES, FETCH_QRCODE, CREATE_QRCODE, UPDATE_QRCODE, 
    fetchQrcodesSuccess, fetchQrcodesFail, fetchQrcodeSuccess, fetchQrcodeFail, createQrcodeSuccess, updateQrcodeSuccess } from './qrcode.actions'

import QrcodeApi from '../../services/QrcodeApi';

export function* fetchQrcodes(action){
    try{
        const qrcodes = yield call(QrcodeApi.get, action.query);
        yield put(fetchQrcodesSuccess(qrcodes));
    }catch(error){
        yield put(fetchQrcodesFail(error));
    }
}

export function* fetchQrcode(action){
    try{
        const qrcodes = yield call(QrcodeApi.get, action.query);
        if(qrcodes && qrcodes.length > 0){
            yield put(fetchQrcodeSuccess(qrcodes[0]));
        }else{
            yield put(fetchQrcodeFail('No Qrcodes available'));
        }
    }catch(error){
        yield put(fetchQrcodeFail(error));
    }
}

export function* createQrcode(action) {
    try {
        const qrcode = yield call(QrcodeApi.create, action.data);
        yield put(createQrcodeSuccess(qrcode));
    } catch (error) {
        // yield put(addError({
        //     ...error
        // }))
    }
}

export function* updateQrcode(action) {
    try {
        const qrcodes = yield call(QrcodeApi.update, action.data);
        yield put(updateQrcodeSuccess(qrcodes));

    } catch (error) {
        // yield put(addError({
        //     ...error
        // }))
    }
}

export function* watchQrcodes(){
    yield takeLatest(FETCH_QRCODES, fetchQrcodes);
    yield takeLatest(FETCH_QRCODE, fetchQrcode);
    yield takeLatest(CREATE_QRCODE, createQrcode);
    yield takeLatest(UPDATE_QRCODE, updateQrcode);
}