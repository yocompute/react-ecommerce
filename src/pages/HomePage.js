import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import ProductList from '../components/product/ProductList';
import {fetchProductsAsync} from '../actions/product'
import {setMerchant} from '../actions/merchant'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import './HomePage.scss'

const DEFAULT_MERCHANT_ID = '5c9542ce0851a5096e044d16';

const HomePage = ({match, fetchProductsAsync, products, setMerchant}) => {

    useEffect(() => {
        if (match.params && match.params.id) {
            const merchantId = match.params.id;
            setMerchant({_id: merchantId });
            fetchProductsAsync({merchantId});
        }else{
            const merchantId = DEFAULT_MERCHANT_ID;
            setMerchant({_id: merchantId });
            fetchProductsAsync({merchantId});
        }
    }, [fetchProductsAsync]);

    const handleNext = () => {

    }

    return (
        <div className='page'>
            <Header title={'Home Page'}></Header>
            <div className="product-list-area">
                <ProductList data={products} />
            </div>
        {/* <SignupSelect></SignupSelect> */}

        <Footer type="button" enable={true} onNext={handleNext} amount={0}></Footer>
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
    {fetchProductsAsync, setMerchant}
)(HomePage);