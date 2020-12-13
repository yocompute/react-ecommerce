import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { QuantityInput } from "../common/QuantityInput";
import { Link } from "react-router-dom";
import { setProduct } from "../../redux/product/product.actions";

import DefaultImage from '../../assets/defaultProduct.jpg'
// import './ProductList.scss'


const useStyles = makeStyles((theme) => ({
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
    image: {
        height: '120px'
    },
    textCol: {
        width: 'calc(100% - 148px)',
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

const ProductList = ({ data, setProduct }) => {

    const classes = useStyles();

    function handleSelect(product) {
        setProduct(product);
    }

    // function handleIncrease(v) {

    // }
    // function handleDecrease(v) {

    // }
    // function handleQuantityChange(v) {

    // }

    function getPictureUrl(d) {
        return d.pictures[0];
    }
    return (
        data && data.length ?
            data.map(d => 
                <div className={classes.productRow} key={d._id}>

                <Link 
                    className={classes.link}
                    to={{ pathname: `/products/${d._id}` }}
                    onClick={e => handleSelect(d)} >
                            {/* <Grid item xs={6} m={0} className="pic-col">
                            <img src={DefaultImage} />
                            </Grid>
                            <Grid item xs={6}> 
                                <div>{d.name}</div>
                                <div>${d.price}</div>
                            </Grid> */}

                    <div className={classes.pictureCol}>
                        <img className={classes.image} src={DefaultImage} />
                    </div>
                    <div className={classes.textCol}> 
                        <div className={classes.productName}>{d.name}</div>
                        <div className={classes.price}>${d.price}</div>
                    </div>
                </Link>
                </div>
            )
            :
            <div>No Available Products</div>
    )
}

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps, { setProduct })(ProductList);
