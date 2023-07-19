import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { FaChevronDown, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import ShopList from './Shop/ShopList';

const cx = classNames.bind(styles);

const Navbar = (props) => {
    const { onOpen } = props;
    const handleClickSearch = () => {
        onOpen();
    };

    return (
        <>
            <div className={cx('nav-container')}>
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a href="/" className="navbar-brand navbar-item-link">
                            <img
                                src="https://www.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png"
                                alt="Image"
                                className={cx('navbar-image')}
                            />
                        </a>

                        <div
                            className="collapse navbar-collapse mean-menu"
                            style={{
                                display: 'block',
                            }}
                        >
                            <ul className="navbar-nav" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                {/* Home */}
                                <li className={cx('navbar-item')}>
                                    <a href="#" className="nav-link active" style={{ fontWeight: '600' }}>
                                        Home
                                        <i className={cx('icon-link-dropdown')}>
                                            <FaChevronDown />
                                        </i>
                                    </a>
                                    <ul className={`${cx('dropdown-menu-list')}`}>
                                        <li className={cx('nav-item')}>
                                            <a href="/" className={`nav-link ${cx('nav-item-link')}`}>
                                                Closther
                                            </a>
                                        </li>

                                        <li className={cx('nav-item')}>
                                            <a href="/" className={`nav-link ${cx('nav-item-link')}`}>
                                                Watches
                                            </a>
                                        </li>

                                        <li className={cx('nav-item')}>
                                            <a href="/" className={`nav-link ${cx('nav-item-link')}`}>
                                                Sneakers
                                            </a>
                                        </li>

                                        <li className={cx('nav-item')}>
                                            <a href="/" className={`nav-link ${cx('nav-item-link')}`}>
                                                Jewelry
                                            </a>
                                        </li>

                                        <li className={cx('nav-item')}>
                                            <a href="/" className={`nav-link ${cx('nav-item-link')}`}>
                                                Cosmetics
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                {/* Shop */}
                                <li className={cx('navbar-item')}>
                                    <a href="#" className="nav-link active" style={{ fontWeight: '600' }}>
                                        Shop
                                        <i className={cx('icon-link-dropdown')}>
                                            <FaChevronDown />
                                        </i>
                                    </a>
                                    <ul className={`${cx('dropdown-menu-list')} ${cx('dropdown-menu-list-mega')}`}>
                                        <li className={cx('nav-item')}>
                                            <ShopList />
                                        </li>
                                    </ul>
                                </li>

                                {/* About us */}
                                <li className={cx('navbar-item')}>
                                    <a href="#" className="nav-link active" style={{ fontWeight: '600' }}>
                                        About us
                                        <i className={cx('icon-link-dropdown')}>
                                            <FaChevronDown />
                                        </i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"></li>
                                    </ul>
                                </li>

                                {/* Blog */}
                                <li className={cx('navbar-item')}>
                                    <a href="#" className="nav-link active" style={{ fontWeight: '600' }}>
                                        Blog
                                        <i className={cx('icon-link-dropdown')}>
                                            <FaChevronDown />
                                        </i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"></li>
                                    </ul>
                                </li>

                                {/* Pages */}
                                <li className={cx('navbar-item')}>
                                    <a href="#" className="nav-link active" style={{ fontWeight: '600' }}>
                                        Pages
                                        <i className={cx('icon-link-dropdown')}>
                                            <FaChevronDown />
                                        </i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"></li>
                                    </ul>
                                </li>

                                {/* Contact */}
                                <li className={cx('navbar-item')}>
                                    <a href="#" className="nav-link active" style={{ fontWeight: '600' }}>
                                        Contact
                                        <i className={cx('icon-link-dropdown')}>
                                            <FaChevronDown />
                                        </i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"></li>
                                    </ul>
                                </li>
                            </ul>

                            <div className={cx('others-option')}>
                                <div className={cx('option-item')}>
                                    <div className={cx('wishlist-btn')}>
                                        <a href="/" className={cx('option-item-link')}>
                                            <i>
                                                <AiOutlineHeart />
                                            </i>
                                        </a>
                                    </div>
                                </div>
                                <div className={cx('option-item')}>
                                    <div className={cx('wishlist-btn')}>
                                        <a href="/" className={cx('option-item-link')}>
                                            <i>
                                                <FaShoppingCart />
                                            </i>
                                            <span className={cx('quantity-cart')}>3</span>
                                        </a>
                                    </div>
                                </div>
                                <div className={cx('option-item')}>
                                    <div className={cx('wishlist-btn')}>
                                        <div className={cx('option-item-search')} onClick={handleClickSearch}>
                                            <i>
                                                <FaSearch />
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
