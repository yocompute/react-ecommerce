import {cart} from '../../reducers/cart'

const { ExpansionPanelActions } = require("@material-ui/core");

it('initial cart is empty', ()=>{
    const action = { type: 'no_action'};
    const expectedState = {items:[]};
    expect(cart(undefined, action)).toEqual(expectedState);
})

it('add item to an empty cart', ()=>{
    const payload = {productId: 1, productName: 'a', price: 1.0, cost: 0.5, quantity: 1};
    const action = { type: 'UPDATE_CART_ITEM', payload};
    const expectedState = {items:[payload]};
    expect(cart(undefined, action)).toEqual(expectedState);
})


it('add same item to the cart', () => {
    const payload = {productId: 1, productName: 'a', price: 1.0, cost: 0.5, quantity: 3};
    const action = { type: 'UPDATE_CART_ITEM', payload};

    const initState = {items: [{productId: 1, productName: 'a', price: 1.0, cost: 0.5, quantity: 2}]};
    const expectedState = {items:[payload]};
    expect(cart(initState, action)).toEqual(expectedState);
})


it('add same item to the cart with multiple items', () => {
    const item1 = {productId: 2, productName: 'b', price: 1.0, cost: 0.5, quantity: 1};
    const item2 = {productId: 1, productName: 'a', price: 1.0, cost: 0.5, quantity: 1};
    const item3 = {productId: 3, productName: 'c', price: 1.0, cost: 0.5, quantity: 1};

    const payload = {productId: 1, productName: 'a', price: 1.0, cost: 0.5, quantity: 3};
    const action = { type: 'UPDATE_CART_ITEM', payload};

    const initState = {items: [
        item1, item2, item3
    ]};

    const expectedState = {items:[item1, item3, payload]};
    
    expect(cart(initState, action)).toEqual(expectedState);
})

it('remove the only item from the cart', () => {
    const payload = {productId: 1, productName: 'a', price: 1.0, cost: 0.5, quantity: 0};
    const action = { type: 'UPDATE_CART_ITEM', payload};

    const initState = {items: [{productId: 1, productName: 'a', price: 1.0, cost: 0.5, quantity: 2}]};
    const expectedState = {items:[]};
    expect(cart(initState, action)).toEqual(expectedState);
})

it('remove item from the cart with multiple items', () => {
    const item1 = {productId: 2, productName: 'b', price: 1.0, cost: 0.5, quantity: 1};
    const item2 = {productId: 1, productName: 'a', price: 1.0, cost: 0.5, quantity: 1};
    const item3 = {productId: 3, productName: 'c', price: 1.0, cost: 0.5, quantity: 1};

    const payload = {productId: 1, productName: 'a', price: 1.0, cost: 0.5, quantity: 0};
    const action = { type: 'UPDATE_CART_ITEM', payload};

    const initState = {items: [
        item1, item2, item3
    ]};

    const expectedState = {items:[item1, item3]};
    
    expect(cart(initState, action)).toEqual(expectedState);
})