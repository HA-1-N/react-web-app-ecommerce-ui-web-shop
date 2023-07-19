import React from 'react';
import classNames from 'classnames/bind';
import styles from './BannerArea.module.scss';

const cx = classNames.bind(styles);

const BannerArea = () => {
    return (
        <>
            <section className={cx('banner-one')}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={cx('banner_text_one')}>
                                <h1 className={cx('banner-title')}>
                                    Live for <span>Fashion</span>
                                </h1>
                                <h3 className={cx('banner-title-sale')}>Save up to 50%</h3>
                                <button className={cx('theme-btn-one')}>Shop now</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero_img">
                                <img
                                    src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/common/man.png"
                                    alt="image"
                                    className={cx('image-right')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerArea;
