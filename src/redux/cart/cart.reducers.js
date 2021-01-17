import { CLEAR_CART, UPDATE_ADDITION, UPDATE_CART } from './cart.actions';

export const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case UPDATE_CART:
      const item = action.item;
      if (item && item.quantity > 0) {
        const index = state.items.findIndex(it => it.productId === item.productId);
        if (index !== -1) {
          const items = [...state.items];
          items[index] = item;
          return { items };
        } else {
          const items = state.items.filter(it => it.productId !== item.productId);
          return { items: [...items, item] };
        }
      } else {
        const items = state.items.filter(it => it.productId !== item.productId);
        return { items: [...items] };
        // return state;
      }
      break;

    case CLEAR_CART:
      return { items: [] }
      break;

    case UPDATE_ADDITION:
      return {}
      break;
  }

  return state;
}