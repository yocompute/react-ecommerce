import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {selectAuthUser} from '../../redux/auth/auth.selectors';
import { selectQuantity } from '../../redux/cart/cart.selectors';

const useStyles = makeStyles({
  checkoutRow: {
    width: '100%',
    height: '42px',
    backgroundColor: 'orange',
    position: 'fixed',
    bottom: '64px',
    display: 'block',
    lineHeight: '42px',
    paddingLeft: '20px',
    fontSize: '16px',
    textDecoration: 'none'
  },
});

const CartRow = ({ type, user, quantity }) => {
  const classes = useStyles();

    return  <Link className={classes.checkoutRow} to={{ pathname: user? "/cart": "/login-select" }} >
        Checkout Now {">"}
      </Link>
}


const mapStateToProps = state => ({
  user: selectAuthUser(state),
  quantity: selectQuantity(state)
});

export default connect(
  mapStateToProps,
  null
)(CartRow);