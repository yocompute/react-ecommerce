import { combineReducers, createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import { authReducer } from './auth/auth.reducers';
import { usersReducer, userReducer } from './user/user.reducers';
import { brandsReducer, brandReducer } from './brand/brand.reducers';
import { categoriesReducer, categoryReducer } from './category/category.reducers';
import { productsReducer, productReducer } from './product/product.reducers';
import { cartReducer } from './cart/cart.reducers';
import { pageReducer } from './page/page.reducers';
import { paymentReducer } from './payment/payment.reducers';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  tokenId: authReducer,
  users: usersReducer,
  user: userReducer,
  brands: brandsReducer,
  brand: brandReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  page: pageReducer,
  payment: paymentReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;