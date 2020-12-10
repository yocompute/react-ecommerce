import { CLEAR_CART, UPDATE_CART } from './cart.actions';

export const cartReducer = (state = {items:[]}, action) => {
    switch(action.type){
      case UPDATE_CART:
        const item = action.item;
        if(item && item.quantity > 0){
          const items = state.items.filter(it => it.productId !== item.productId);
          return { items: [...items, item ]};
        }else{
          const items = state.items.filter(it => it.productId !== item.productId);
          return { items };
        }
      break;

      case CLEAR_CART:
        return {items:[]}
        break;
    } 

    return state;
  }