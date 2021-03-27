import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';

import { updateCartItem } from '../../redux/cart/cart.actions';
import { updateCombo } from '../../redux/product/product.actions';

import {setPage} from '../../redux/page/page.actions';
import { selectProductQuantity } from '../../redux/cart/cart.selectors';
import { selectComboAdditions } from '../../redux/product/product.selectors';

import Addition from '../../components/product/Addition';

const useStyles = makeStyles((theme) => ({
    title:{
        width: '100%',
        padding: '10px'
    },
    link:{
        textDecoration: 'none'
    },
}));

const Additions = ({brand, product, additions, setPage, updateCartItem, quantity, combo, comboAdditions, updateCombo, selectedAdditions}) => {
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
    function handleChange(product, addition, additionQuantity) {
        // if(d.item){
        //     updateCartItem({
        //         ...d.item,
        //         quantity: d.quantity
        //     });
        // }
        if(comboAdditions.length === 0){
            if(additionQuantity !== 0){ // add new
                const refId = uuidv4();
                updateCombo(refId, product, addition, additionQuantity);
            }else{
                // change back to single product
                updateCombo(combo.refId, product, addition, additionQuantity);
            }
        }else{
            updateCombo(combo.refId, product, addition, additionQuantity);
        }
    }

    return additions ?
        <div>
            <div className={classes.title}>Additions:</div>
            {

                additions.map(a => 
                    <Addition key={a._id} addition={a} onChange={handleChange}/>
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
    quantity: selectProductQuantity(state),
    combo: state.combo,
    comboAdditions: selectComboAdditions(state),
});

export default connect(
    mapStateToProps,
    {setPage, updateCartItem, updateCombo}
)(Additions);