import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import ProductList from '../components/product/ProductList';
import ProductGrid from '../components/product/ProductGrid';
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import {setMerchant} from '../redux/merchant/merchant.actions'
import {fetchProducts} from '../redux/product/product.actions'

import './HomePage.scss'

const DEFAULT_MERCHANT_ID = '5c9542ce0851a5096e044d16';

const HomePage = ({match, fetchProducts, products, setMerchant}) => {

    useEffect(() => {
        if (match.params && match.params.id) {
            const merchantId = match.params.id;
            setMerchant({_id: merchantId });
            fetchProducts({merchantId});
        }else{
            const merchantId = DEFAULT_MERCHANT_ID;
            setMerchant({_id: merchantId });
            fetchProducts({merchantId});
        }
    }, [fetchProducts]);

    const handleNext = () => {

    }

    return (
        <div className='page'>
            <Header title={'Home Page'}></Header>
            <div className="product-list-area">
                <ProductGrid data={products} />
            </div>
        {/* <SignupSelect></SignupSelect> */}

        <Footer type="menu" enable={true} onNext={handleNext} amount={0}></Footer>
        </div>
    )
}

HomePage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
        id: PropTypes.string
        })
    }),
    history: PropTypes.object
};

const mapStateToProps = state => ({
    products: state.products
});

export default connect(
    mapStateToProps,
    {fetchProducts, setMerchant}
)(HomePage);