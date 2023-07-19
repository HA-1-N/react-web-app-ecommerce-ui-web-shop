import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductVariation.module.scss';

const cx = classNames.bind(styles);

const ProductVariation = () => {
    return (
        <>
            <section className={cx('product-variation-one')}>
                <div className={cx('container-fluid')}>
                    <div className="row">
                        {/* Left */}
                        <div className="col-lg-4 col-md-6">
                            <div className={cx('product-variation_one_box')}>
                                <img
                                    src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/offer/woman.png"
                                    alt="image"
                                    className={cx('product-variation-image')}
                                />
                                <div className={cx('product-var-one-text')}>
                                    <h4 className={cx('header-title')}>Outerwear</h4>
                                    <h2>New</h2>
                                    <h4>Collection</h4>
                                    <button className={cx('theme-btn-one')}>Shop now</button>
                                </div>
                            </div>
                            <div className={cx('product-variation_one_box')}>
                                <img
                                    src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/offer/woman1.png"
                                    alt="image"
                                    className={cx('product-variation-image')}
                                />
                                <div className={cx('product-var-one-text')}>
                                    <h4 className={cx('header-title')}>Summer</h4>
                                    <h2>Hot</h2>
                                    <h4>Collection</h4>
                                    <button className={cx('theme-btn-one')}>Shop now</button>
                                </div>
                            </div>
                        </div>

                        {/* Center */}
                        <div className="col-lg-4 col-md-6">
                            <div className={cx('product-variation_one_box')}>
                                <img
                                    src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/offer/bag.png"
                                    alt="image"
                                    className={cx('product-variation-image')}
                                />
                                <div className={cx('product-var-one-text-center')}>
                                    <h4 className={cx('header-title')}>10% Offer</h4>
                                    <h4>No selected models</h4>
                                    <button className={cx('theme-btn-one')}>Shop now</button>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="col-lg-4 col-md-6">
                            <div className={cx('product-variation_one_box')}>
                                <img
                                    src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/offer/woman4.png"
                                    alt="image"
                                    className={cx('product-variation-image')}
                                />
                                <div className={cx('product-var-one-text')}>
                                    <h4 className={cx('header-title')}>Arrivals</h4>
                                    <h2>New</h2>
                                    <h4>Collection</h4>
                                    <button className={cx('theme-btn-one')}>Shop now</button>
                                </div>
                            </div>
                            <div className={cx('product-variation_one_box')}>
                                <img
                                    src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/offer/kids.png"
                                    alt="image"
                                    className={cx('product-variation-image')}
                                />
                                <div className={cx('product-var-one-text')}>
                                    <h4 className={cx('header-title')}>Offer</h4>
                                    <h2>New</h2>
                                    <h4>Collection</h4>
                                    <button className={cx('theme-btn-one')}>Shop now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductVariation;
