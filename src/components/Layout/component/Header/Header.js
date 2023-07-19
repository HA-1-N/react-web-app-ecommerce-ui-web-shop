import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FaPhoneVolume, FaStreetView } from 'react-icons/fa';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <ul className={cx('top-header-contact-info')}>
                                    <li className={cx('top-header-contact-info-item')}>
                                        <i style={{ marginRight: '0.6rem' }}>
                                            <FaPhoneVolume />
                                        </i>
                                        <a href="/" className={cx('item-link')}>
                                            123456
                                        </a>
                                    </li>
                                    <li className={cx('top-header-contact-info-item')}>
                                        <i style={{ marginRight: '0.6rem' }}>
                                            <FaStreetView />
                                        </i>
                                        <a href="/" className={cx('item-link')}>
                                            Ha Noi, Viet Nam
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <ul className={cx('top-header-menu')}>
                                    <li className={cx('top-header-item')}>
                                        <div>Vie</div>
                                    </li>
                                    <li className={cx('top-header-item')}>
                                        <a href="/" className={cx('item-link')}>
                                            My account
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
