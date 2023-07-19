import React from 'react';
import classNames from 'classnames/bind';
import styles from './CopyRight.module.scss';

const cx = classNames.bind(styles);

const CopyRight = () => {
    return (
        <>
            <div className={cx('copyright-one')}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className={cx('copyright-left')}>
                                <h6>
                                    &copy; CopyRight 2022 <span>ShopEcommerce</span>
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className={cx('copyright-right')}>
                                <img
                                    src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/common/payment.png"
                                    alt="image_payment"
                                    className={cx('image_payment')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CopyRight;
