import React from 'react'
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import VerificationCodePage from './pages/auth/VerificationCodePage';
import ProductPage from './pages/product/ProductPage';
import PaymentPage from './pages/payment/PaymentPage';
import CartPage from './pages/cart/CartPage';
import CreditCardPage from './pages/payment/CreditCardPage';
import PaymentHistoryPage from './pages/payment/PaymentHistoryPage';
import LoginSelectPage from './pages/auth/LoginSelectPage'
import LocalLoginPage from './pages/auth/LocalLoginPage'
import LocalSignupPage from './pages/auth/LocalSignupPage';
import BrandPage from './pages/brand/BrandPage';
import CategoryPage from './pages/category/CategoryPage';

import cfg from './config';

// import BrandListPage from './pages/brand/BrandListPage'
// import ProductListPage from './pages/product/ProductListPage'
// import OrderListPage from './pages/order/OrderListPage'

const Routes = () => {
    return (<Switch>
            <Route exact path="/brands/:id" component={BrandPage} />
            <Route path="/categories/:id" component={CategoryPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/creditcard" component={CreditCardPage} />
            <Route path="/login-select" component={LoginSelectPage} />
            <Route path="/local-login" component={LocalLoginPage} />
            <Route path="/local-signup" component={LocalSignupPage} />
            <Route path="/verify-code" component={VerificationCodePage} />
            <Route path="/payments" component={PaymentHistoryPage} />
            {
                cfg.MULTI_BRAND
                ? <Route exact path="/" component={HomePage} />
                : <Route path="/brands" component={BrandPage} />
            }

            {/* <Route path="/orders" component={OrderListPage} /> */}
        </Switch>
        
    )
}

export default Routes;