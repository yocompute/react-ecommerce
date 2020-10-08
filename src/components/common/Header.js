import React from 'react';
//import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './Header.scss';

const Header = ({title}) => {
    return (
        <div className="header">
            <div className="header-bar">
                <div className="header-bar-title">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default Header;