import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import { user } from './reducers/user'
import { products, product } from './reducers/product';
import { cart } from './reducers/cart';
import { merchant } from './reducers/merchant';

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
  user,
  products,
  product,
  cart,
  merchant,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;