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

    case CLEAR_CART:
      return { items: [] };

    case UPDATE_ADDITION:
      return {};

    default:
      return state;
  }

}