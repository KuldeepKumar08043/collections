import React from 'react';
import './NavBar.styles.scss';
import { Link } from 'react-router-dom';
import Logo from './logo.jpg';
import Search from './search.png';
import Cart from './cart.png';
import User from './user.png';
import Menu from './menu.png';

const NavBar = () => {
    return (
        <div className="menu-item">
            <ul className="menu-list">
                <li><img className="logo" src={Logo} /></li>
                <li><Link to="/home">For Me</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/">Jeans</Link></li>
                <li><Link to="/">Shirts</Link></li>
                <li><Link to="/">T-Shirts</Link></li>
                <li><Link to="/">Trousers</Link></li>
                <li><Link to="/">Joggers</Link></li>
                <li><Link to="/">Shorts</Link></li>
            </ul>
            <ul className="cart-item">
            <li><img className="search" src={Search} /></li>
                <li><img className="cart" src={Cart} /></li>
                <li>
                    <img className="user desk" src={User} />
                    <img className="user mob" src={Menu} />
                </li>
            </ul>
        </div>
    )
}

export default NavBar;