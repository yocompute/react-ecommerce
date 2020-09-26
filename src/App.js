import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.scss';

import HomePage from './pages/HomePage';
import LocalSignupPage from './pages/auth/LocalSignupPage';
import VerificationCodePage from './pages/auth/VerificationCodePage';
import ProductPage from './pages/product/ProductPage';
import OrderPage from './pages/order/OrderPage';
import CreditCardPage from './pages/payment/CreditCardPage';
import PaymentHistoryPage from './pages/payment/PaymentHistoryPage';
import LoginSelectPage from './pages/auth/LoginSelectPage'
import LocalLoginPage from './pages/auth/LocalLoginPage'

function App() {
  return (
    <div className="App" data-testid="test-app">
      <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/merchants/:id" component={HomePage} />
            <Route path="/order" component={OrderPage} />
            <Route path="/products/:id" component={ProductPage} />
            <Route path="/creditcard" component={CreditCardPage} />
            <Route path="/login-select" component={LoginSelectPage} />
            <Route path="/local-login" component={LocalLoginPage} />
            <Route path="/local-signup" component={LocalSignupPage} />
            <Route path="/verify-code" component={VerificationCodePage} />
            <Route path="/payments" component={PaymentHistoryPage} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
