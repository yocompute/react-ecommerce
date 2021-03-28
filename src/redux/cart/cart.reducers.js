import {
  CLEAR_CART,
  UPDATE_CART_ITEM,
  UPDATE_CART_ITEM_QUANTITY,
  UPDATE_SELECTED_ADDITION
} from './cart.actions';

export const getSummary = (item) => {
  let additionTotal = 0;
  let additionSaleTax = 0;

  if(item.additions && item.additions.length > 0){
    item.additions.forEach(it => {
      const saleTaxRate = it.product.saleTaxRate ? it.product.saleTaxRate : 0;
      additionTotal += it.product.price * it.quantity;
      additionSaleTax += Math.round(it.product.price * it.quantity * saleTaxRate) / 100;
    });
  }

  const subTotal = Math.round((item.product.price + additionTotal) * item.quantity * 100) / 100;
  const saleTaxRate = item.product.saleTaxRate ? item.product.saleTaxRate : 0;
  const saleTax =  Math.round(((item.product.price * saleTaxRate) / 100 + additionSaleTax ) * item.quantity * 100) / 100;
  return { subTotal, saleTax };
}
/**
 * 
 * item: ICartItem = {
 *  refId: string,
 *  product,
 *  addtions: [{ addition, quantity }]
 *  quantity: number,
 *  subTotal: number
 * }
 * 
 */
export const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return {items: []};
    case UPDATE_CART_ITEM:
      const item = action.item;
      // if (item && item.quantity > 0) {
      //   const items = state.items.filter(it => it.productId !== item.productId);
      //   return { items: [...items, item] };
      // } else {
      //   const items = state.items.filter(it => it.productId !== item.productId);
      //   return { items };
      // }

      if (item && item.quantity > 0) {
        const index = state.items.findIndex(it => it.refId === item.refId);
        const newItems = [...state.items];
        const summary = getSummary(item);
        if(index !== -1){
          newItems[index] = {...item, ...summary};
          return { ...state, items: newItems};
        }else{
          newItems.push({...item, ...summary});
        }
        return { ...state, items: newItems};
      } else {
        const items = state.items.filter(it => it.refId !== item.refId);
        return { ...state, items };
      }

    case UPDATE_CART_ITEM_QUANTITY:
      const quantity = action.quantity;
      const refId = action.refId;
      if(quantity === 0){
        const items = state.items.filter(it => it.refId !== refId);
        return { ...state, items };
      }else{
        const index = state.items.findIndex(it => it.refId === action.refId);
        if(index !== -1){
          const newItems = [...state.items];
          const item = { ...state.items[index], quantity};
          const summary = getSummary(item);
          newItems[index] =  {...item, ...summary };
          return {...state, items: newItems};
        }else{
          // pass, should never happen
        }
      }
      return state;

    case UPDATE_SELECTED_ADDITION:
      const index = state.items.findIndex(it => it.refId === action.refId);
      if(index !== -1){
        const item = state.items[index];
        const additions = [...item.additions];
        const quantity = action.quantity;
        const addition = action.addition;
        const newItems = [...state.items];

        if (quantity === 0) {
          const newItem = {
            ...item,
            additions: additions.filter(it => it.product._id !== addition._id)
          };
          const summary = getSummary(newItem);
          newItems[index] = {...newItem, ...summary};
          return {...state, items: newItems};
        } else {
            const additionIndex = additions.findIndex(it => it.product._id === addition._id);
            if( additionIndex !== -1) {
                additions[additionIndex] = { product: addition, quantity };
                const newItem = {
                    ...item,
                    additions,
                }
                const summary = getSummary(newItem);
                newItems[index] = {...newItem, ...summary};
                return {...state, items: newItems};
            }else{
              // should not happen
                // return {
                //     refId,
                //     product,
                //     additions: [...additions, { product: addition, quantity }],
                // }
            }
        }
      }
  }

  return state;
}


