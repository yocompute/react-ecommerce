import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { selectQuantity } from '../redux/cart/cart.selectors';
import {selectAuthUser} from '../redux/auth/auth.selectors';
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

const CheckoutRow = ({ user, brand }) => {
    const classes = useStyles();

    return <div className={classes.checkoutRow}>
        <Link className={classes.continueBtn} to={{ pathname: user ? "/payment" : "/login-select" }} >
            Continue
        </Link>
        <Link className={classes.backBtn} to={{ pathname: user ? `/brands/${brand._id}` : "/login-select" }} >
            Back
        </Link>
    </div>
}


const mapStateToProps = state => ({
    user: selectAuthUser(state),
    brand: state.brand,
    quantity: selectQuantity(state)
});

export default connect(
    mapStateToProps,
    null
)(CheckoutRow);