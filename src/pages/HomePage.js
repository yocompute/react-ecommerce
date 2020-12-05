import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import ProductList from '../components/product/ProductList';
import ProductGrid from '../components/product/ProductGrid';
import {fetchProducts} from '../redux/product/product.actions'
import {setBrand} from '../redux/brand/brand.actions'
// import Header from '../components/common/Header'
import Footer from '../layout/Footer'

import './HomePage.scss'

const DEFALUT_BRAND_ID = '5fcb99645e8e066332a6714b';

const HomePage = ({match, fetchProducts, products, setBrand}) => {

    useEffect(() => {
        if (match.params && match.params.id) {
            const brand = match.params.id;
            setBrand({_id: brand });
            fetchProducts({brand});
        }else{
            const brand = DEFALUT_BRAND_ID;
            setBrand({_id: brand });
            fetchProducts({brand});
        }
    }, [fetchProducts]);

    const handleNext = () => {

    }

    return (
        <div className='page'>
            {/* <Header title={'Home Page'}></Header> */}
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
    {fetchProducts, setBrand}
)(HomePage);