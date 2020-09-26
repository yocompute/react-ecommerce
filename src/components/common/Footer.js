import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Footer.scss';

const Menu = {
  HOME: 'Home',
  HISTORY: 'History',
  SETTINGS: 'Settings'
}

const Footer = ({type, user}) => {

  const [menu, setMenu] = useState(Menu.HOME)
  const handleSelect = () => {

  }
    return <div className="footer">
      {
        type === 'menu' &&

        <div className="row bottom-btn bottom-nav-menus">
          <div className={menu === Menu.HOME ? 'menu active' : 'menu'} onClick={() => handleSelect(Menu.HOME)}>
            <Link style={{ textDecoration: 'none' }} to={{ pathname: "/" }}>
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                  <path fill='none' d="M0 0h24v24H0V0z" />
                  <path fill={menu === Menu.HOME ? '#4285F3' : '#333'} d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                </svg>
              </div>
              <div className="icon-text">Home</div>
            </Link>
          </div>

          <div className={menu === Menu.HISTORY ? 'menu active' : 'menu'} onClick={() => handleSelect(Menu.HISTORY)}>
            <Link style={{ textDecoration: 'none' }} to={{ pathname: `/history/${user._id}` }} >
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path fill={menu === Menu.HISTORY ? '#4285F3' : '#333'} d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
                </svg>
              </div>
              <div className="icon-text">History</div>
            </Link>
          </div>

          <div className={menu === Menu.SETTINGS ? 'menu active' : 'menu'} onClick={() => handleSelect(Menu.SETTINGS)}>
            <Link style={{ textDecoration: 'none' }} to={{ pathname: "/account" }} >
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path fill={menu === Menu.SETTINGS ? '#4285F3' : '#333'} d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="icon-text">Settings</div>
            </Link>
          </div>

        </div>
      }
      {
        type === 'button' &&
        <div className="row bottom-bar">
            <Link style={{ textDecoration: 'none' }} to={{ pathname: user? "/order": "/login-select" }} >
                <div className="bottom-btn btn-col" >Checkout</div>
            </Link>
        </div>
      }
    </div>
  }


const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  null
)(Footer);