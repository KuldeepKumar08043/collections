import React from 'react';
import './Homepage.styles.scss';
import BannerImage from './banner.png';
import SummerFree from './img1.png';
import Wrinkle from './img2.png';
import StainFree from './img3.png';
import Jeans from './jeans.png';
import Collection from './collection.png';
import Boy from './boy.png';
import Footer from '../Footer/Footer';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="banner">
                <img className="banner-image" src={BannerImage} />
                <div className="banner-text">
                    <span className="text">Clothes that respire</span>
                    <span className="text">for man who aspire</span>
                    <button className="button">Browse Collections</button>
                </div>
            </div>
            <div className="banner-sub-image">
                <div className="left-image">
                    <span className="center-txt">Summer is here and so is our collection</span>
                    <img className="w-100" src={SummerFree} />
                </div>
                <div className="right-image">
                    <div className="top-image">
                        <span className="center-txt">Wrinkle-free t-shirts</span>
                        <img className="w-100" src={Wrinkle} />
                    </div>

                    <div className="bottom-image">
                        <span className="center-txt">Stain-free denim shirts</span>
                        <img className="w-100" src={StainFree} />
                    </div>

                </div>
            </div>
            <div className="collections">
                <div className="list-heading">
                    <h3><span>Latest Collections</span></h3>
                </div>
                <div className="list-of-item">
                    <ul>
                        <li>
                            <div className="products">
                                <img className="w-100" src={Jeans} />
                                <div className="product-details">
                                    <span className="brand">Printing Polo T-shirt</span>
                                    <span className="price">1,499.00</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="products">
                                <img className="w-100" src={Collection} />
                                <div className="product-details">
                                    <span className="brand">Printing Polo T-shirt</span>
                                    <span className="price">1,499.00</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="products">
                                <img className="w-100" src={Jeans} />
                                <div className="product-details">
                                    <span className="brand">Printing Polo T-shirt</span>
                                    <span className="price">1,499.00</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="products">
                                <img className="w-100" src={Collection} />
                                <div className="product-details">
                                    <span className="brand">Printing Polo T-shirt</span>
                                    <span className="price">1,499.00</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="products">
                                <img className="w-100" src={Jeans} />
                                <div className="product-details">
                                    <span className="brand">Printing Polo T-shirt</span>
                                    <span className="price">1,499.00</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="testimonial">
                <h2>Testimonial</h2>
                <div className="testimonial-list">
                    <ul>
                        <li>
                        <img className="w-100 userImage" src={Boy} />
                            <div className="user-info">
                                <div className="rating">
                                    <span>Vikas</span>
                                    <span className="star">*****</span>
                                </div>
                                <div className="rating-paragraph">
                                    <p>Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                        <img className="w-100 userImage" src={Boy} />
                            <div className="user-info">
                                <div className="rating">
                                    <span>Vikas</span>
                                    <span className="star">*****</span>
                                </div>
                                <div className="rating-paragraph">
                                    <p>Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                        <img className="w-100 userImage" src={Boy} />
                            <div className="user-info">
                                <div className="rating">
                                    <span>Vikas</span>
                                    <span className="star">*****</span>
                                </div>
                                <div className="rating-paragraph">
                                    <p>Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="subscribe-users">
                <span className="coupon">GET COUPONS & STYLE GUIDES</span>
                <span className="newsletter">Subscribe to our Newsletter</span>
                <div className="input-btn">
                    <input className="input-text" type="text" placeholder="Email" />
                    <button className="button">Subscribe</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Homepage;