import React, { useState } from 'react';
import { connect } from 'react-redux';

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// import Sidebar from './Sidebar'
import Header from './Header';
import Footer from './Footer';
import CartRow from './CartRow';
import CheckoutRow from  './CheckoutRow';
import AddToOrderRow from './AddToOrderRow';
import PlaceOrderRow from './PlaceOrderRow';

import Routes from '../Routes';
import {selectQuantity} from '../redux/cart/cart.selectors';
import {PRODUCT_PAGE, HOME_PAGE, BRAND_PAGE, PAYMENT_PAGE, CART_PAGE} from '../const';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        height: '100%',
    },
    header: {
        width: '100%',
        height: '56px'
    },
    content: {
        width: '100%',
        height: 'calc(100% - 128px)',
        overflow: 'auto',
        position: 'absolute',
        top: '56px'
    },

    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    // appBar: {
    //     zIndex: theme.zIndex.drawer + 1,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    // },
    // appBarShift: {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    appBarSpacer: theme.mixins.toolbar,
    // menuButton: {
    //     marginRight: 36,
    // },
    // menuButtonHidden: {
    //     display: 'none',
    // },

    container: {
        padding: theme.spacing(4)
    },
    // leftNav:{
    //     padding: theme.spacing(2),
    //     display: 'flex',
    //     overflow: 'auto',
    //     flexDirection: 'column',
    // }
    paper: {
        // padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    // drawerPaper: {
    //     position: 'relative',
    //     whiteSpace: 'nowrap',
    //     width: drawerWidth,
    //     transition: theme.transitions.create('width', {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
}))


function Layout({page, cart}) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [sidebarExpanded, setSidebarExpanded] = useState(true);

    const handleSidebarToggle = (expanded) => {
        setSidebarExpanded(expanded);
    }
    return (
        <div className={classes.root}>
            <div className={classes.header} >
                <Header 
                    sidebarExpanded={sidebarExpanded}
                    onToggle={handleSidebarToggle}
                />
            </div>

            {/* <Sidebar
                expanded={sidebarExpanded}
                onToggle={handleSidebarToggle}
            /> */}

            <div className={classes.content} >
                {/* <div className={classes.appBarSpacer} /> */}
                {/* <div className={fixedHeightPaper}> */}
                    <Routes />
                {/* </div> */}
            </div>
            {
                page.name === PRODUCT_PAGE &&
                <AddToOrderRow />
            }
            {
                (page.name === BRAND_PAGE || page.name === HOME_PAGE || page.name === CART_PAGE) && cart.items.length > 0 &&
                <CartRow />
            }
            {
                page.name === PAYMENT_PAGE &&
                <PlaceOrderRow />
            }
            {
                window.matchMedia(`(max-width: 768px)`).matches && page.name !== PRODUCT_PAGE && page.name !== PAYMENT_PAGE &&
                <Footer enable={true} amount={0}></Footer>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    page: state.page,
    cart: state.cart,
    nProducts: selectQuantity(state)
});

export default connect(
    mapStateToProps,
    null
)(Layout);