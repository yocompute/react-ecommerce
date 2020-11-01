import { put, call, select, takeLatest } from 'redux-saga/effects'
import AuthApi from '../../services/AuthApi'
import { FETCH_AUTH, LOGIN,
    fetchAuthSuccess, loginSuccess } from './auth.actions'
// import { setACL } from '../ACL/ACL.actions'
// import { selectACL } from '../ACL/ACL.selectors'

export function* fetchAuth(query) {
    try {
        const auth = yield call(AuthApi.get, query);
        yield put(fetchAuthSuccess(auth));
        // const { authId, role, permissions } = yield select(selectACL);
        // const auth = auths[0];

        // if (role === auth.role) {
        //     yield put(setACL(authId, role, permissions));
        // } else {
        //     yield put(setACL(auth.id, auth.role, auth.permissions));
        // }

    } catch (error) {
        // yield put(addError({
        //     ...error
        // }))
    }
}


export function* login(action) {
    try {
        const auth = yield call(AuthApi.login, action.data);
        yield put(loginSuccess(auth));
    } catch (error) {
        // yield put(addError({
        //     ...error
        // }))
    }
}


export function* watchAuth() {
    yield takeLatest(FETCH_AUTH, fetchAuth);
    yield takeLatest(LOGIN, login);
}