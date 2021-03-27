import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { selectQuantity,selectProductQuantity } from '../redux/cart/cart.selectors';
import {selectAuthUser} from '../redux/auth/auth.selectors';
import {updateCartItem} from '../redux/cart/cart.actions';

const useStyles = makeStyles({
  checkoutRow: {
    width: '100%',
    height: '56px',
    position: 'absolute',
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

const AddToOrderRow = ({ user, brand, product, combo, nProducts, updateCartItem }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleAddToCart = () => {
    if(combo){
      updateCartItem({
          ...combo,
          quantity: 1
      });
    }
    history.push(user ? `/brands/${brand._id}` : "/login-select");
  }

  return <div className={classes.checkoutRow}>
    {
      ((brand && nProducts > 0) || (product && product.type === 'C' )) &&
      <div className={classes.continueBtn} onClick={handleAddToCart} >
        Add to Order
      </div>
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
  user: selectAuthUser(state),
  brand: state.brand,
  product: state.product,
  combo: state.combo,
  nProducts: selectQuantity(state),
  quantity: selectProductQuantity(state)
});

export default connect(
  mapStateToProps,
  {updateCartItem}
)(AddToOrderRow);