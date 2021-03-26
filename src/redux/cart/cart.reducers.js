import {UPDATE_CART, UPDATE_SELECTED_ADDITIONS} from './cart.actions';


/**
 * item: Combo = {
 *  refId: string,
 *  product,
 *  addtions: [{ addition, quantity }]
 *  total: number
 * }
 * 
 */
export const cartReducer = (state = { items: [] }, action) => {
  const item = action.item;
  switch (action.type) {
    case UPDATE_CART:
      // if (item && item.quantity > 0) {
      //   const items = state.items.filter(it => it.productId !== item.productId);
      //   return { items: [...items, item] };
      // } else {
      //   const items = state.items.filter(it => it.productId !== item.productId);
      //   return { items };
      // }

      if (item && item.quantity > 0) {
        const items = state.items.filter(it => it.refId !== item.refId);
        return { items: [...items, item] };
      } else {
        const items = state.items.filter(it => it.refId !== item.refId);
        return { items };
      }
  }

  return state;
}


