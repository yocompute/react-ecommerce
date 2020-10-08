const ACTION_MERCHANT = {
    SET_MERCHANT: 'SET_MERCHANT'
};

export const setMerchant = (payload) => ({
    type: ACTION_MERCHANT.SET_MERCHANT,
    payload
})

export default ACTION_MERCHANT;