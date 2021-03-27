import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';

// import Button from '@material-ui/core/Button';
import { QuantityInput } from '../../components/common/QuantityInput';
import { updateCartItem } from '../../redux/cart/cart.actions';
import {setPage} from '../../redux/page/page.actions';
import {PRODUCT_PAGE} from '../../const';

import DefaultPicture from '../../assets/detailProduct.jpg'
import Additions from "../../components/product/Additions";

import { selectQuantity, selectProductQuantity } from '../../redux/cart/cart.selectors';

// import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles(() => ({
    root:{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0px",
    },
    product:{
        width: '100%',
        height: '100%',
    },
    picWrapper: {
        width: '100%',
        height: '142px'
    },
    image: {
        width: '100%'
    },
    productRow: {
        width: '100%',
        height: '120px',
        display: 'block',
        boxSizing: 'border-box',
        margin: '10px 0px'
    },
    link:{
        textDecoration: 'none'
    },
    pictureCol: {
        width: '146px',
        height: '120px',
        float: 'left'
    },
    textCol: {
        width: '200px',
        height: '120px',
        float: 'left',
        display: 'block',
        boxSizing: 'border-box',
        padding: '20px'
    },
    quantityCol:{
        width: 'calc(100% - 200px)',
        height: '120px',
        float: 'left',
        display: 'block',
        boxSizing: 'border-box',
        padding: '20px'
    },
    productName: {
        color: '#666',
        fontSize: '18px'
    },
    price: {
        color: '#333',
        paddingTop: '10px',
        fontSize: '22px'
    }
}));

const ProductPage = ({brand, product, setPage, updateCartItem, quantity}) => {
    const classes = useStyles();

    useEffect(() => {
        setPage(PRODUCT_PAGE);
    }, [setPage])

    // function handleSelect() {

    // }

    function toCartItem(product){
        return {
            productId: product._id,
            productName: product.name,
            brandId: product.brand._id,
            price: product.price,
            cost: product.cost,
            saleTaxRate: product.saleTaxRate,
            purchaseTaxRate: product.purchaseTaxRate,
            quantity: 0
        }
    }

    /**
     * 
     * @param {*} d  {item [CartItem], quantity [number]}
     */
    function handleQuantityChange(d) {
        if(d.item){
            updateCartItem({
                ...d.item,
                quantity: d.quantity
            });
        }
    }

    return (
        <div className={classes.root}>
            {
                product &&
                <div className={classes.product}>
                    <div className={classes.picWrapper}>
                        <img className={classes.image} src={DefaultPicture} />
                    </div>
                    <div className={classes.textCol}> 
                        <div className={classes.productName}>{product.name}</div>
                        <div className={classes.price}>${product.price}</div>
                    </div>

                    <div className={classes.quantityCol}>
                    {/* {
                        !(product && product.type === 'C') &&
                        <QuantityInput
                            onChange={handleQuantityChange}
                            val={quantity}
                            item={toCartItem(product)}
                        />
                    } */}
                    </div>

                    <div>
                        {
                            product && product.additions && product.additions.length > 0 &&
                            <Additions additions={product.additions}/>
                        }
                    </div>
                </div>
            }
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
    {setPage, updateCartItem}
)(ProductPage);