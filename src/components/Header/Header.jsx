import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='items'>
                <a href="">home1</a>
                <a href="">home2</a>
                <a href="">home3</a>
                <a href="">home4</a>
            </div>
        </nav>
    );
};

export default Header;