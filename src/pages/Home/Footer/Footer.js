import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const cx = classNames.bind(styles);

const Footer = () => {
    return (
        <>
            <div className={cx('footer-one')}>
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-4 col-md-12 col-sm-12 col-12')}>
                            <div className={cx('footer-left-side')}>
                                <a href="#" className={cx('image-link')}>
                                    <img
                                        src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/logo.png"
                                        alt="logo"
                                        className={cx('logo')}
                                    />
                                </a>
                                <p className={cx('para')}>&copy; 2021 All rights reserved.</p>
                                <div className={cx('footer-left-side-icon')}>
                                    <ul className={cx('list-icon')}>
                                        <li className={cx('item-icon')}>
                                            <FaFacebookF />
                                        </li>
                                        <li className={cx('item-icon')}>
                                            <FaTwitter />
                                        </li>
                                        <li className={cx('item-icon')}>
                                            <FaLinkedin />
                                        </li>
                                        <li className={cx('item-icon')}>
                                            <FaInstagram />
                                        </li>
                                        <li className={cx('item-icon')}>
                                            <FaGooglePlusG />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={cx('col-lg-3 col-md-12 col-sm-12 col-12')}>
                            <div className={cx('footer-one-widget')}>
                                <h3 className={cx('title')}>Information</h3>
                                <ul className={cx('widget-list')}>
                                    <li className={cx('widget-item')}>
                                        <a href="#">Home</a>
                                    </li>
                                    <li className={cx('widget-item')}>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li className={cx('widget-item')}>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li className={cx('widget-item')}>
                                        <a href="#">Frequently Questions</a>
                                    </li>
                                    <li className={cx('widget-item')}>
                                        <a href="#">Order Tracking</a>
                                    </li>
                                    <li className={cx('widget-item')}>
                                        <a href="#">Compare</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('col-lg-2 col-md-12 col-sm-12 col-12')}>
                            <div className={cx('footer-one-widget')}>
                                <h3 className={cx('title')}>YOUR ACCOUNT</h3>
                                <ul className={cx('widget-list')}>
                                    <li className={cx('widget-item')}>
                                        <a href="#">Cart View One</a>
                                    </li>
                                    <li className={cx('widget-item')}>
                                        <a href="#">Cart View Two</a>
                                    </li>
                                    <li className={cx('widget-item')}>
                                        <a href="#">Empty Cart</a>
                                    </li>
                                    <li className={cx('widget-item')}>
                                        <a href="#">Checkout View One</a>
                                    </li>
                                    <li className={cx('widget-item')}>
                                        <a href="#">Checkout View One</a>
                                    </li>
                                    <li className={cx('widget-item')}>
                                        <a href="#">Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={cx('col-lg-3 col-md-12 col-sm-12 col-12')}>
                            <div className="footer-one-widget">
                                <h3 className={cx('title')}>Newsletter</h3>
                                <div className={cx('mc-form')}>
                                    <input type="email" />
                                    <div className={cx('clear')}>
                                        <button className={cx('btn-clear-submit')}>Send Mail</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
