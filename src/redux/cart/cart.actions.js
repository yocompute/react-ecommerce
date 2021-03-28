
export const UPDATE_CART_ITEM = 'cart/UPDATE_CART_ITEM';
export const UPDATE_CART_ITEM_QUANTITY = 'cart/UPDATE_CART_ITEM_QUANTITY';
export const UPDATE_SELECTED_ADDITION = 'cart/UPDATE_SELECTED_ADDITION';
export const CLEAR_CART = 'cart/CLEAR_CART';


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
export const updateCartItem = item => ({
    type: UPDATE_CART_ITEM,
    item
})

export const updateCartItemQuantity = (refId, quantity) => ({
    type: UPDATE_CART_ITEM_QUANTITY,
    refId,
    quantity
})

export const updateSelectedAddition = (refId, addition, quantity) => ({
    type: UPDATE_SELECTED_ADDITION,
    refId,
    addition,
    quantity
})

export const clearCart = () => ({
    type: CLEAR_CART,
})