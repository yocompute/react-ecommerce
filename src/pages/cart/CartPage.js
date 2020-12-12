import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';


// import Button from '@material-ui/core/Button'
import { CartItemList } from '../../components/cart/CartItemList';
// import { PaymentMethodSelect } from '../../components/common/PaymentMethodSelect'
import { setPage } from  '../../redux/page/page.actions';
import { updateCart } from '../../redux/cart/cart.actions';
import { CART_PAGE } from '../../const';

// import Header from '../../components/common/Header'

const useStyles = makeStyles( theme => ({
    page: {
        padding: '20px'
    }
}));

const CartPage = ({cart, setPage, updateCart}) => {
    const classes = useStyles();
    const handlePaymentMethodSelect = () => {

    }
    
    useEffect(() => {
        setPage(CART_PAGE);
    }, [setPage])


    function handleQuantityChange(d) {
        if (d.item) {
            updateCart({
            ...d.item,
            quantity: d.quantity
            });
        }
    }

    return (
        <div className={classes.page}>
            {/* <Header title={'Order Page'}></Header> */}
            <CartItemList items={cart.items} onQuantityChange={handleQuantityChange} />
            {/* <div className="label payment-label">Payment Method</div> */}
            {/* <PaymentMethodSelect onSelect={handlePaymentMethodSelect}></PaymentMethodSelect> */}
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
    mapStateToProps,
    {
        setPage,
        updateCart
    }
)(CartPage);