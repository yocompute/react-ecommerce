import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import queryString from 'query-string';

import { makeStyles } from '@material-ui/core/styles';

import ProductList from '../../components/product/ProductList';
import ProductGrid from '../../components/product/ProductGrid';
import { fetchProducts } from '../../redux/product/product.actions';
import { fetchBrand } from '../../redux/brand/brand.actions';
import { setPage } from '../../redux/page/page.actions';
import { setQrcode } from '../../redux/qrcode/qrcode.actions';

import { BRAND_PAGE } from '../../const';

const DEFAULT_BRAND_ID = '5fcb99645e8e066332a6714b';

const useStyles = makeStyles((theme) => ({
    page: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0px'
    },
}));

const BrandPage = ({ location, match, fetchBrand, fetchProducts, products, setPage, setQrcode }) => {
    const classes = useStyles();
    useEffect(() => {
        const params = queryString.parse(location.search);

        if(params.brandId && params.qrcode){
            fetchBrand({ _id: params.brandId });
            fetchProducts({ brand: params.brandId });
            setPage(BRAND_PAGE);
            setQrcode(params.qrcode);
        }

        // if (match.params && match.params.id) {
        //     const brand = match.params.id;
        //     fetchBrand({ _id: brand });
        //     fetchProducts({ brand });
        //     setPage(BRAND_PAGE);

        //     if(match.params && match.params.qrcode){
        //         setQrcode(match.params.qrcode);
        //     }
        // } 
        else {
            const brand = DEFAULT_BRAND_ID;
            fetchBrand({ _id: brand });
            fetchProducts({ brand });
            setPage(BRAND_PAGE);
        }
    }, [fetchProducts]);

    const handleNext = () => {

    }

    return (
        <div className={classes.page}>
            {

                window.matchMedia(`(max-width: 768px)`).matches
                    ? <ProductList data={products} />
                    : <ProductGrid data={products} />
            }
        </div>
    )
}

BrandPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    }),
    history: PropTypes.object,
    location: PropTypes.object,
};

const mapStateToProps = state => ({
    products: state.products
});

export default connect(
    mapStateToProps,
    {
        fetchProducts,
        fetchBrand,
        setQrcode,
        setPage
    }
)(BrandPage);