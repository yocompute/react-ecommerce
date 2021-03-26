import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CartItem} from './CartItem';

const useStyles = makeStyles(() => ({
  itemList:{
      padding: '0px',
      margin: '0px'
  },
}));

export const CartItemList = ({ items, onQuantityChange, onAdditionQuantityChange }) => {
  const classes = useStyles();

  return <div className={classes.itemList}>
    {
      items && items.length > 0 &&
      items.map(item => <CartItem key={item.refId} item={item} onQuantityChange={onQuantityChange} onAdditionQuantityChange={onAdditionQuantityChange}/>
      )
    }
  </div>
}