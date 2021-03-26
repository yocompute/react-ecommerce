
export const UPDATE_CART = 'cart/UPDATE_CART'
export const UPDATE_SELECTED_ADDITIONS = 'cart/UPDATE_SELECTED_ADDITIONS';

export const updateCart = item => ({
    type: UPDATE_CART,
    item
})


export const updateSelectedAdditions = (addition, quantity) => ({
    type: UPDATE_SELECTED_ADDITIONS,
    addition,
    quantity
})