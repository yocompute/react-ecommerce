import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from "prop-types"

import Button from '@material-ui/core/Button'
import { CartItemList } from '../../components/cart/CartItemList';
import { PaymentMethodSelect } from '../../components/common/PaymentMethodSelect'

const OrderPage = ({cart}) => {
    const handlePaymentMethodSelect = () => {

    }

    return (
        <div>Order Page
            <CartItemList items={cart.items}/>
            <div className="label payment-label">Payment Method</div>
            <PaymentMethodSelect onSelect={handlePaymentMethodSelect}></PaymentMethodSelect>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
    mapStateToProps,
    null
)(OrderPage);