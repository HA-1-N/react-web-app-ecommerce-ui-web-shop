import React from 'react';
import classNames from 'classnames/bind';
import styles from './InstagramArea.module.scss';
import { FaInstagram } from 'react-icons/fa';

import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const cx = classNames.bind(styles);

const data = [
    {
        image: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/instagram/post10.png',
    },
    {
        image: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/instagram/post9.png',
    },
    {
        image: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/instagram/post8.png',
    },
    {
        image: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/instagram/post7.png',
    },
    {
        image: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/instagram/post6.png',
    },
    {
        image: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/instagram/post5.png',
    },
    {
        image: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/instagram/post4.png',
    },
    {
        image: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/instagram/post3.png',
    },
    {
        image: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/instagram/post2.png',
    },
    {
        image: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/instagram/post1.png',
    },
];

const InstagramArea = () => {
    return (
        <>
            <div className={cx('instagram-area-one')}>
                <div className={cx('container-fluid')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-12')}>
                            <div className={cx('center-heading')}>
                                <h2 className={cx('instagram-area-title')}>Follow Us Instagram</h2>
                                <p className={cx('instagram-area-para')}>
                                    Mauris luctus nisi sapien tristique dignissim ornare
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-12')}>
                            <SwiperComponent
                                modules={[Navigation, Scrollbar, Autoplay]}
                                slidesPerView={5}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                grabCursor={true}
                            >
                                {data?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={cx('instagram-post')}>
                                            <div className={cx('instagram-icon')}>
                                                <i>
                                                    <FaInstagram />
                                                </i>
                                            </div>
                                            <img src={item.image} alt="image_view" className={cx('slider-show')} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </SwiperComponent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InstagramArea;
