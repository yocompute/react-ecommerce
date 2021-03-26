import React from 'react';

import { QuantityInput } from '../common/QuantityInput';
import { makeStyles } from '@material-ui/core/styles';
import { CallReceived } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  itemList:{
      padding: '0px',
      margin: '0px'
  },
  itemRow: {
    paddingBottom: '3px',
    paddingRight: '4px',
    width: '100%',
    height: '40px'
  },
  quantityCol: {
    padding: '0px',
    width: '130px',
    float: 'right'
  },
  nameCol: {
    width: '150px',
    fontSize: '14px',
    float: 'left',
    padding: '8px 0px'
  },
  priceCol: {
    width: '50px',
    fontSize: '14px',
    float: 'left',
    padding: '8px 0px'
  },
}));

export const CartItemList = ({ items, onQuantityChange }) => {
  const classes = useStyles();

  return <div className={classes.itemList}>
    {
      items && items.length > 0 &&
      items.map(item =>
        <div className={classes.itemRow} key={item.refId}>
          <div className={classes.nameCol}>{item.product.name}</div>
          <div className={classes.priceCol}>${item.product.price}</div>

          <div className={classes.quantityCol}>
            <QuantityInput
              onChange={onQuantityChange}
              val={item.quantity}
              item={item}
            />
          </div>
        </div>
      )
    }
  </div>
}