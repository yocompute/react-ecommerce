import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Button from '@material-ui/core/Button';
import { QuantityInput } from '../../components/common/QuantityInput';
import { updateCart } from '../../redux/cart/cart.actions';
import {setPage} from '../../redux/page/page.actions';
import {PRODUCT_PAGE} from '../../const';
import { selectProductQuantity } from '../../redux/cart/cart.selectors';

const ProductPage = ({brand, product, setPage, updateCart, quantity}) => {

    useEffect(() => {
        setPage(PRODUCT_PAGE);
    }, [setPage])

    function handleSelect() {

    }

    function handleUpdate(n) {
        if(product){
            updateCart({
                productId: product._id,
                productName: product.name,
                brandId: brand._id,
                price: product.price,
                cost: product.cost,
                saleTaxRate: product.saleTaxRate,
                purchaseTaxRate: product.purchaseTaxRate,
                quantity: n
            });
        }
    }

    return (
        <div>
            {/* <Header title={'Product Detail'}></Header>             */}
            {
                product &&
                <div>

                    <div className="pic-col">
                        {/* <img src={product.pictures[0]} /> */}
                    </div>
                    <div>{product.name}</div>
                    {/* <div>${d.regularPrice}</div> */}
                    <div>${product.price}</div>
                </div>
            }


                <QuantityInput
                    onChange={handleUpdate}
                    val={quantity}
                />

                <Link style={{ textDecoration: 'none' }} to={{ pathname: `/brands/${brand._id}` }} >
                    <Button>Add to Order</Button>
                </Link>
        </div>
    )
}

ProductPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }),
    history: PropTypes.object
};


const mapStateToProps = state => ({
    product: state.product,
    brand: state.brand,
    quantity: selectProductQuantity(state)
});

export default connect(
    mapStateToProps,
    {setPage, updateCart}
)(ProductPage);