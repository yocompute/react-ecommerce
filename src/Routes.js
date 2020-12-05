import React from 'react'
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import VerificationCodePage from './pages/auth/VerificationCodePage';
import ProductPage from './pages/product/ProductPage';
import OrderPage from './pages/order/OrderPage';
import CreditCardPage from './pages/payment/CreditCardPage';
import PaymentHistoryPage from './pages/payment/PaymentHistoryPage';
import LoginSelectPage from './pages/auth/LoginSelectPage'
import LocalLoginPage from './pages/auth/LocalLoginPage'
import LocalSignupPage from './pages/auth/LocalSignupPage';


import BrandPage from './pages/brand/BrandPage';
// import UserListPage from './pages/user/UserListPage'
// import BrandListPage from './pages/brand/BrandListPage'
// import ProductListPage from './pages/product/ProductListPage'
// import OrderListPage from './pages/order/OrderListPage'

const Routes = () => {
    return (<Switch>
            <Route path="/brands/:id" component={HomePage} />
            <Route path="/order" component={OrderPage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/creditcard" component={CreditCardPage} />
            <Route path="/login-select" component={LoginSelectPage} />
            <Route path="/local-login" component={LocalLoginPage} />
            <Route path="/local-signup" component={LocalSignupPage} />
            <Route path="/verify-code" component={VerificationCodePage} />
            <Route path="/payments" component={PaymentHistoryPage} />
            {/* <Route path="/users" component={UserListPage} /> */}
            {/* <Route path="/orders" component={OrderListPage} /> */}
            <Route exact path="/" component={BrandPage} />
            {/* <Route exact path="/" component={HomePage} /> */}
        </Switch>
        
    )
}

export default Routes;