import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from "prop-types"

import Button from '@material-ui/core/Button'
import { CartItemList } from '../../components/cart/CartItemList';
import { PaymentMethodSelect } from '../../components/common/PaymentMethodSelect'
import { setPage } from  '../../redux/page/page.actions';
import { PAYMENT_PAGE } from '../../const';

// import Header from '../../components/common/Header'

const PaymentPage = ({cart, setPage}) => {
    const handlePaymentMethodSelect = () => {

    }
    
    useEffect(() => {
        setPage(PAYMENT_PAGE);
    }, [setPage])

    return (
        <div>
            {/* <Header title={'Order Page'}></Header> */}
            <CartItemList items={cart.items}/>
            <div className="label payment-label">Payment Method</div>
            {/* <PaymentMethodSelect onSelect={handlePaymentMethodSelect}></PaymentMethodSelect> */}
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
    mapStateToProps,
    {setPage}
)(PaymentPage);