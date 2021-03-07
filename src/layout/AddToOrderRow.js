import React from 'react';
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

const AddToOrderRow = ({ user, brand, quantity }) => {
  const classes = useStyles();

  return <div className={classes.checkoutRow}>
    {
      quantity > 0 && brand &&
      <Link className={classes.continueBtn} to={{ pathname: user ? `/brands/${brand._id}` : "/login-select" }} >
        Add to Order
      </Link>
    }
    {
      brand &&
      <Link className={classes.backBtn} to={{ pathname: user ? `/brands/${brand._id}` : "/login-select" }} >
        Back
    </Link>
    }
  </div>
}

const mapStateToProps = state => ({
  user: state.user,
  brand: state.brand,
  quantity: selectProductQuantity(state)
});

export default connect(
  mapStateToProps,
  null
)(AddToOrderRow);