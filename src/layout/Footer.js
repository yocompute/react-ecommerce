import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import Badge from '@material-ui/core/Badge';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RestoreIcon from '@material-ui/icons/Restore';
import SettingsIcon from '@material-ui/icons/Settings';

import { selectQuantity } from '../redux/cart/cart.selectors';
import {selectAuthUser} from '../redux/auth/auth.selectors';
// import './Footer.scss';

const Menu = {
  HOME: 'Home',
  HISTORY: 'History',
  SETTINGS: 'Settings'
}
const useStyles = makeStyles({
  footer: {
    position: 'fixed',
    bottom: '0px'
  },
  root: {
    width: 500,
  },
});

const Footer = ({ type, user, brand, quantity }) => {
  const classes = useStyles();
  const [menu, setMenu] = useState(Menu.HOME)

  return <div className={classes.footer}>
    {
      window.matchMedia(`(max-width: 768px)`).matches &&
      <BottomNavigation
        value={menu}
        onChange={(event, newValue) => {
          setMenu(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
        <BottomNavigationAction label="Cart" icon={
          <Badge badgeContent={quantity} color="primary">
            <ShoppingCartIcon />
          </Badge>
        } component={Link} to="/cart" />
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} component={Link} to="/payments" />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} component={Link} to="settings" />
      </BottomNavigation>
    }
  </div>
}


const mapStateToProps = state => ({
  user: selectAuthUser(state),
  brand: state.brand,
  quantity: selectQuantity(state)
});

export default connect(
  mapStateToProps,
  null
)(Footer);   
