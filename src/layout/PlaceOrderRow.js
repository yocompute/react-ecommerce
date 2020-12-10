import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { selectQuantity } from '../redux/cart/cart.selectors';
import { PaymentStatus } from '../const';
import { createPayment } from '../redux/payment/payment.actions';
const useStyles = makeStyles({
    checkoutRow: {
        width: '100%',
        height: '56px',
        position: 'fixed',
        bottom: '0px',
        display: 'block',
        lineHeight: '42px',
    },
    continueBtn: {
        display: 'block',
        fontSize: '18px',
        float: 'left',
        textDecoration: 'none',
        width: '50%',
        height: '56px',
        textAlign: 'center',
        paddingTop: '8px',
        backgroundColor: 'orange',
    },
    backBtn: {
        display: 'block',
        fontSize: '18px',
        textDecoration: 'none',
        width: '50%',
        height: '56px',
        textAlign: 'center',
        paddingTop: '8px',
        backgroundColor: 'white',
        borderTop: '1px solid #ddd',
        borderLeft: '1px solid #ddd',
        boxSizing: 'border-box',
        float: 'right'
    }
});

const PlaceOrderRow = ({ type, user, cart, createPayment }) => {
    const classes = useStyles();
    const history = useHistory();

    const handlePlaceOrder = () => {
        const p = {
            items: [],
            note: '',
            total: 0,
            cost: 0,
            status: PaymentStatus.NEW,
            user: user._id
        }
        cart.items.forEach(it => {
            p.items.push({
                product: it.productId,
                brand: it.brandId,
                quantity: it.quantity
            });
            p.total += it.price * (100 + it.saleTaxRate) / 100;
            p.cost += it.cost * (100 + it.purchaseTaxRate) / 100;
        })
        createPayment({data: p, history});
    }

    return <div className={classes.checkoutRow}>
        <div className={classes.continueBtn} onClick={handlePlaceOrder} >
            Place Order
        </div>
        <Link className={classes.backBtn} to={{ pathname: user ? "/" : "/login-select" }} >
            Back
        </Link>
    </div>
}


const mapStateToProps = state => ({
    cart: state.cart,
    user: state.user,
    quantity: selectQuantity(state)
});

export default connect(
    mapStateToProps,
    {createPayment}
)(PlaceOrderRow);