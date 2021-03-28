import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { setPage } from '../../redux/page/page.actions';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux'
// import PropTypes from "prop-types"

// import Button from '@material-ui/core/Button'
// import Header from '../../components/common/Header'
import { PAYMENT_HISTORY_PAGE } from '../../const';
import { clearRedirect, setNotification } from '../../redux/notification/notification.actions';
import { selectAuthUser } from "../../redux/auth/auth.selectors";
import { fetchPayments } from "../../redux/payment/payment.actions";

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '4px 20px',
        width: '100%',
    },
    payment: {
      padding: '10px 0px',
      borderBottom: '1px solid #eee',
    },
    paymentItem: {
        width: '100%',
        paddingTop: '5px',
    },
    addition: {
        fontSize: '12px',
        color: 'rgba(0,0,0, 0.54)'
    }
}));

const PaymentHistoryPage = ({user, path, payments, setPage, clearRedirect, setNotification, fetchPayments }) => {
    const classes = useStyles();

    useEffect(() => {
        setPage(PAYMENT_HISTORY_PAGE);
      }, [setPage]);
    
      useEffect(() => {
          if(user){
              fetchPayments({user: user._id});
          }
      }, []);

    useEffect(() => {
        if(path){
            setNotification('The Order was placed successfully!', 200);
            clearRedirect();
        }
    }, []);

    const toDateString = (s) => {
        const d = s.split('T');
        return d ? d[0] : '';
    }

    return (
        <div className={classes.root}>
            {
                payments && payments.length > 0 &&
                payments.map(p => <div key={p._id} className={classes.payment}>
                    <div>{toDateString(p.createUTC)}</div>
                    {
                        p.items && p.items.length > 0 && 
                        p.items.map(it => <div key={it._id} className={classes.paymentItem}>
                            <div>{it.product.name} x {it.quantity}</div>
                            {
                                it.additions && it.additions.length > 0 && 
                                it.additions.map(a => <div key={a._id} className={classes.addition}>
                                    <div>{a.name} x {a.quantity}</div>
                                </div>)
                            }
                            </div>)
                    }
                    </div>)
            }
        </div>
    )
}
const mapStateToProps = state => ({
    user: selectAuthUser(state),
    path: state.path,
    payments: state.payments,
});

export default connect(
    mapStateToProps,
    {setPage, clearRedirect, setNotification, fetchPayments}
)(PaymentHistoryPage);