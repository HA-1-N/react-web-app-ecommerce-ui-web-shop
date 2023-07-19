import React from 'react';
import classNames from 'classnames/bind';
import styles from './ShopList.module.scss';

const cx = classNames.bind(styles);

const ShopList = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    {/* List 1 */}
                    <div className="col">
                        <h6 className={cx('submenu-title')}>Shop Styles</h6>
                        <ul className={cx('megamenu-submenu')}>
                            <li>
                                <a href="#">Shop four grid</a>
                            </li>

                            <li>
                                <a href="#">Shop Three Grid</a>
                            </li>

                            <li>
                                <a href="#">Shop List View</a>
                            </li>

                            <li>
                                <a href="#">Shop Left Sidebar</a>
                            </li>

                            <li>
                                <a href="#">Shop Right Sidebar</a>
                            </li>

                            <li>
                                <a href="#">Product Single</a>
                            </li>

                            <li>
                                <a href="#">Product Single Two</a>
                            </li>
                        </ul>
                    </div>

                    {/* Other page */}

                    <div className="col">
                        <h6 className={cx('submenu-title')}>Other page</h6>
                        <ul className={cx('megamenu-submenu')}>
                            <li>
                                <a href="#">Product Single Three</a>
                            </li>

                            <li>
                                <a href="#">Cart View One</a>
                            </li>

                            <li>
                                <a href="#">Cart View Two</a>
                            </li>

                            <li>
                                <a href="#">Cart View Three</a>
                            </li>

                            <li>
                                <a href="#">Cart View Four</a>
                            </li>

                            <li>
                                <a href="#">Empty Cart</a>
                            </li>

                            <li>
                                <a href="#">Checkout View One</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <h6 className={cx('submenu-title')}>Shop Styles</h6>
                        <ul className={cx('megamenu-submenu')}>
                            <li>
                                <a href="#">Shop four grid</a>
                            </li>

                            <li>
                                <a href="#">Shop four grid</a>
                            </li>

                            <li>
                                <a href="#">Shop four grid</a>
                            </li>

                            <li>
                                <a href="#">Shop four grid</a>
                            </li>

                            <li>
                                <a href="#">Shop four grid</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <h6 className={cx('submenu-title')}>Shop Styles</h6>
                        <ul className={cx('megamenu-submenu')}>
                            <li>
                                <a href="#">Shop four grid</a>
                            </li>

                            <li>
                                <a href="#">Shop four grid</a>
                            </li>

                            <li>
                                <a href="#">Shop four grid</a>
                            </li>

                            <li>
                                <a href="#">Shop four grid</a>
                            </li>

                            <li>
                                <a href="#">Shop four grid</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopList;
