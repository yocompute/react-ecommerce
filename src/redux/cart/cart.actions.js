
export const UPDATE_CART = 'cart/UPDATE_CART';
export const CLEAR_CART = 'cart/CLEAR_CART';

export const UPDATE_ADDITION = 'cart/UPDATE_ADDITION';

/**
item:
    productId
    productName
    brandId
    price
    cost
    saleTaxRate
    purchaseTaxRate
    quantity
*/
export const updateCart = item => ({
    type: UPDATE_CART,
    item
})

export const clearCart = () => ({
    type: CLEAR_CART
})

export const updateAddition = (addition) => ({
    type: UPDATE_ADDITION,
    addition
})