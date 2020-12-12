import React from 'react';

export const CartSummary = ({ items }) => {

  return <div className="item-list">
    {
      items && items.length > 0 &&
      items.map(item =>
        {
            return item.quantity > 0 &&
            <div className="text-sm item-row" key={item.productId}>
                <div className="name-col">{item.productName}</div>
                <div className="quantity-col">x{item.quantity}</div>
                <div className="price-col">${item.price}</div>
            </div>
        }
      )
    }
  </div>
}