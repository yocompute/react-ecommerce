import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';

import { CartItemList } from '../../components/cart/CartItemList';
import { setPage } from  '../../redux/page/page.actions';
import { updateCartItemQuantity, updateSelectedAddition } from '../../redux/cart/cart.actions';
import { CART_PAGE } from '../../const';
import { CartSummary } from '../../components/cart/CartSummary';


const useStyles = makeStyles( () => ({
    page: {
        padding: '0px'
    },
    list: {
        padding: '20px',
    },
}));

const CartPage = ({cart, setPage, updateCartItemQuantity, updateSelectedAddition}) => {
    const classes = useStyles();
    
    
    useEffect(() => {
        setPage(CART_PAGE);
    }, [setPage])


    // d: IQuantityInputResult --- { item, quantity }
    const handleQuantityChange = (d) => {
        updateCartItemQuantity(d.refId, d.quantity);
    }

    // d: IQuantityInputResult --- { item, quantity }
    const handleAdditionQuantityChange = (d) => {
        updateSelectedAddition(d.refId, d.item, d.quantity);
    }



    return (
        <div className={classes.page}>
            {/* <Header title={'Order Page'}></Header> */}
            <div className={classes.list}>
            <CartItemList 
                items={cart.items} 
                onQuantityChange={handleQuantityChange}
                onAdditionQuantityChange={handleAdditionQuantityChange}
            />
            </div>
            {/* <div className="label payment-label">Payment Method</div> */}
            {/* <PaymentMethodSelect onSelect={handlePaymentMethodSelect}></PaymentMethodSelect> */}

            <CartSummary cart={cart} />
        </div>
    )
}

CartPage.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.any
  }),
  setPage: PropTypes.func,
  updateCartItemQuantity: PropTypes.func,
  updateSelectedAddition: PropTypes.func
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
    mapStateToProps,
    {
        setPage,
        updateCartItemQuantity,
        updateSelectedAddition
    }
)(CartPage);