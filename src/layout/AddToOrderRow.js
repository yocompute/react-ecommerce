import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { selectProductQuantity } from '../redux/cart/cart.selectors';

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

const AddToOrderRow = ({ user, quantity }) => {
  const classes = useStyles();

  return <div className={classes.checkoutRow}>
    {
      quantity > 0 &&
      <Link className={classes.continueBtn} to={{ pathname: user? "/": "/login-select" }} >
        Add to Order
      </Link>
    }
    <Link className={classes.backBtn} to={{ pathname: user? "/": "/login-select" }} >
      Back
    </Link>
  </div>
}

const mapStateToProps = state => ({
  user: state.user,
  quantity: selectProductQuantity(state)
});

export default connect(
  mapStateToProps,
  null
)(AddToOrderRow);