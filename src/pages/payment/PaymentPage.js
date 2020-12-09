import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';


// import Button from '@material-ui/core/Button'
import { CartItemList } from '../../components/cart/CartItemList';
// import { PaymentMethodSelect } from '../../components/common/PaymentMethodSelect'
import { setPage } from  '../../redux/page/page.actions';
import { PAYMENT_PAGE } from '../../const';

// import Header from '../../components/common/Header'

const useStyles = makeStyles( theme => ({
    page: {
        padding: '20px'
    }
}));

const PaymentPage = ({cart, setPage}) => {
    const classes = useStyles();
    const handlePaymentMethodSelect = () => {

    }
    
    useEffect(() => {
        setPage(PAYMENT_PAGE);
    }, [setPage])

    return (
        <div className={classes.page}>
            {/* <Header title={'Order Page'}></Header> */}
            <CartItemList items={cart.items}/>
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
    {setPage}
)(PaymentPage);