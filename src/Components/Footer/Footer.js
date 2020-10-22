import React from 'react';
import './Footer.styles.scss';
import Logo from './logo.jpg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <ul>
                    <li>About Us</li>
                    <li>Delivery Information</li>
                    <li>Returns and Exchange</li>
                    <li>Technical and Privacy</li>
                    <li>Order Status</li>
                </ul>
                <ul>
                    <li><img className="footer-logo" src={Logo} /></li>
                    <li>Stay in touch with us</li>
                </ul>
                <ul>
                    <li>
                        <div className="addredd">
                            <span>Our Corporate Office</span>
                            <span>No: 7,A2B road, Adayar Rajpuram, T-Nagar, Chennai - 642002.</span>
                        </div>
                    </li>
                    <li>
                        <div className="contact-details">
                            <span>sales@madeup.com</span>
                            <span>044 9999 9999</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;