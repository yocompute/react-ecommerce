import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';

import { updateCart } from '../../redux/cart/cart.actions';
import {setPage} from '../../redux/page/page.actions';
import { selectProductQuantity } from '../../redux/cart/cart.selectors';

import Addition from '../../components/product/Addition'

const useStyles = makeStyles((theme) => ({
    title:{
        width: '100%',
        padding: '10px'
    },
    link:{
        textDecoration: 'none'
    },
}));

const Additions = ({brand, product, additions, setPage, updateCart, quantity}) => {
    const classes = useStyles();

    function toCartItem(product){
        return {
            productId: product._id,
            productName: product.name,
            brandId: brand._id,
            price: product.price,
            cost: product.cost,
            saleTaxRate: product.saleTaxRate,
            purchaseTaxRate: product.purchaseTaxRate,
            quantity: 0
        }
    }

    /**
     * 
     * @param {*} d  {item [CartItem or AddtionItem], quantity [number]}
     */
    function handleQuantityChange(d) {
        if(d.item){
            updateCart({
                ...d.item,
                quantity: d.quantity
            });
        }
    }

    return additions ?
        <div>
            <div className={classes.title}>Additions:</div>
            {

                additions.map(a => 
                    <Addition key={a._id} addition={a} />
                )
            }
        </div>
        :<div />
}

Additions.propTypes = {
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
)(Additions);