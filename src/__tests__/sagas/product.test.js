
import { call } from 'redux-saga/effects'

import ProductApi from '../../services/ProductApi'
import {fetchProducts} from '../../sagas/product'

it("getProducts", () => {
    const it = fetchProducts({payload: 'test'})
    expect(it.next().value).toEqual(call(ProductApi.getProducts, 'test'));
})