
export const UPDATE_CART = 'cart/UPDATE_CART';
export const CLEAR_CART = 'cart/CLEAR_CART';
export const updateCart = item => ({
    type: UPDATE_CART,
    item
})

export const clearCart = () => ({
    type: CLEAR_CART
})