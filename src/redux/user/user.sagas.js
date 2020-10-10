import { put, call, select, takeLatest } from 'redux-saga/effects'
import UserApi from '../../services/UserApi'
import { fetchUsersSuccess } from './user.actions';
import { selectACL } from '../ACL/ACL.selectors';

export function* fetchUsers(query){
    try{
        const users = yield call(UserApi.get, query);
        yield put(fetchUsersSuccess(users));
        const {userId, role, permissions } = yield select(selectACL);
        const user = users[0];

        if(role === user.role){
            yield put(setACL(userId, role, permissions));
        }else{
            yield put(setACL(user.id, user.role, user.permissions));
        }
        
    }catch(error){
        // yield put(addError({
        //     ...error
        // }))
    }
}