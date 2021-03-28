import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import Header from './Header';
import Footer from './Footer';

import Routes from '../Routes';
import { selectCategoryMap } from "../redux/product/product.selectors";
import { setCategory } from '../redux/category/category.actions';

import {PRODUCT_PAGE, HOME_PAGE, BRAND_PAGE, PAYMENT_PAGE, CART_PAGE} from '../const';
import ActionButtons from './ActionButtons';
import { useHistory } from 'react-router-dom';
import {selectAuthUser} from '../redux/auth/auth.selectors';
import {updateCartItem} from '../redux/cart/cart.actions';
import { createPayment } from '../redux/payment/payment.actions';
import { clearNotification } from '../redux/notification/notification.actions';
import { PaymentStatus } from '../const';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        height: '100%',
    },
    header: {
        width: '100%',
        height: '56px'
    },
    headerTall: {
        width: '100%',
        height: '104px'
    },
    content: {
        width: '100%',
        height: 'calc(100% - 128px)',
        overflow: 'auto',
        position: 'absolute',
        top: '56px'
    },
    contentShort: {
        width: '100%',
        height: 'calc(100% - 176px)',
        overflow: 'auto',
        position: 'absolute',
        top: '104px'
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


function Layout({page, cart, combo, brand, user, qrcode, categoryMap, notification, setCategory, updateCartItem, createPayment, clearNotification}) {
    const classes = useStyles();
    // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [sidebarExpanded, setSidebarExpanded] = useState(true);

    const history = useHistory();
    
    const handleSidebarToggle = (expanded) => {
        setSidebarExpanded(expanded);
    }

    const handleScroll = (e) => {
        Object.keys(categoryMap).forEach(name => {
            const el = document.getElementById(categoryMap[name]._id);
            if(el){
                const t = el.getBoundingClientRect().top;
                if(t > 0 && t < 160){
                    setCategory(categoryMap[name]);
                    return;
                }else{
                    return;
                }
            }else{
                return;
            }
        })
    };


    // for the cart page
    const handleCancelCart = () => {
        history.push('/');
    }

    // for the cart page
    const handleCheckout = () => {
        history.push('/payment');
    }

    const handleAddToCart = () => {
        if(combo){
          updateCartItem({
              ...combo,
              quantity: 1
          });
        }
        history.push(user ? `/brands/${brand._id}` : "/login-select");
    }

    const handleCancelProduct = () => {
        history.push(`/brands/${brand._id}`);
    }

    const handlePlaceOrder = () => {
        const p = {
            items: [],
            note: '',
            subTotal: 0,
            saleTax: 0,
            total: 0,
            status: PaymentStatus.NEW,
            user: user._id,
            qrcode: qrcode._id
        }

        cart.items.forEach(it => {
            const additions = [];
            if(it.additions && it.additions.length > 0){
                it.additions.forEach(addition => {
                    additions.push({
                        product: addition.product._id,
                        name: addition.product.name,
                        price: addition.product.price,
                        cost: addition.product.cost,
                        saleTaxRate:addition.product.saleTaxRate,
                        purchaseTaxRate:addition.product.purchaseTaxRate,
                        quantity: addition.quantity
                    });
                })
            }

            p.items.push({
                // refId: it.refId,
                product: it.product._id,
                price: it.product.price,
                cost: it.product.cost,
                saleTaxRate: it.product.saleTaxRate,
                purchaseTaxRate: it.product.purchaseTaxRate,
                brand: it.product.brand._id,
                additions, 
                quantity: it.quantity,
                subTotal: it.subTotal,
                saleTax: it.saleTax,
            });
            p.subTotal += it.subTotal;
            p.saleTax += it.saleTax;
        });

        p.subTotal = Math.round(p.subTotal * 100) / 100;
        p.saleTax = Math.round(p.saleTax * 100) / 100;
        p.total = Math.round((p.subTotal + p.saleTax) * 100) / 100;

        createPayment(p);
    }

    const handleCancelOrder = () => {
        history.push('/');
    }

    const handleNotificationClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        clearNotification();
      };

    return (
        <div className={classes.root}>
            <div className={page.name === BRAND_PAGE ? classes.headerTall : classes.header} >
                <Header 
                    sidebarExpanded={sidebarExpanded}
                    onToggle={handleSidebarToggle}
                />
            </div>

            {/* <Sidebar
                expanded={sidebarExpanded}
                onToggle={handleSidebarToggle}
            /> */}

            <div className={page.name === BRAND_PAGE? classes.contentShort : classes.content} onScroll={handleScroll}>
                {/* <div className={classes.appBarSpacer} /> */}
                {/* <div className={fixedHeightPaper}> */}
                    <Routes />
                {/* </div> */}
            </div>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={notification && notification.show}
                autoHideDuration={3000}
                message={notification ? notification.error: ''}
                onClose={handleNotificationClose}
            />
            {
                page.name === PRODUCT_PAGE &&
                <ActionButtons 
                    showOkButton={true}
                    okButtonText="Add to Cart"
                    onOk={handleAddToCart}
                    onCancel={handleCancelProduct}
                />
            }
            {
                page.name === PAYMENT_PAGE &&
                <ActionButtons 
                showOkButton={true}
                okButtonText="Place Order"
                onOk={handlePlaceOrder}
                onCancel={handleCancelOrder}
            />
            }
            {
                page.name === CART_PAGE &&
                <ActionButtons 
                    showOkButton={cart && cart.items && cart.items.length > 0}
                    okButtonText="Checkout"
                    onOk={handleCheckout}
                    onCancel={handleCancelCart}
                />
            }
            {
                window.matchMedia(`(max-width: 768px)`).matches && page.name !== PRODUCT_PAGE && page.name !== PAYMENT_PAGE && page.name !== CART_PAGE &&
                <Footer enable={true} amount={0}></Footer>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    user: selectAuthUser(state),
    qrcode: state.qrcode,
    brand: state.brand,
    product: state.product,
    combo: state.combo,
    page: state.page,
    cart: state.cart,
    categoryMap: selectCategoryMap(state),
    notification: state.notification
});

export default connect(
    mapStateToProps,
    {setCategory, updateCartItem, createPayment, clearNotification}
)(Layout);