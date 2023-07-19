import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TodaysArea.module.scss';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { spacing_size } from '../../../utils/size/index';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight, FaExchangeAlt, FaExpand } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const cx = classNames.bind(styles);

const data = [
    {
        imageSrc_one: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product1.png',
        imageSrc_two: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png',
    },
    {
        imageSrc_one: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png',
        imageSrc_two: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product1.png',
    },
    {
        imageSrc_one: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product1.png',
        imageSrc_two: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png',
    },
    {
        imageSrc_one: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png',
        imageSrc_two: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product1.png',
    },
    {
        imageSrc_one: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product1.png',
        imageSrc_two: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png',
    },
    {
        imageSrc_one: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png',
        imageSrc_two: 'https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product1.png',
    },
];

const TodaysArea = () => {
    return (
        <>
            <Box className={cx('todays-area')}>
                <Container maxWidth="lg">
                    <Stack direction="row" spacing={spacing_size}>
                        <Grid container spacing={spacing_size}>
                            <Grid item lg={12} md={12} sm={12}>
                                <Box className={cx('center-heading')}>
                                    <Typography component="h2" className={cx('todays-area-title')}>
                                        TODAY'S DEAL
                                    </Typography>
                                    <Typography className={cx('todays-area-para')}>
                                        Mauris luctus nisi sapien tristique dignissim ornare
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Stack>
                    <Stack direction="row" spacing={spacing_size}>
                        <Grid container spacing={spacing_size}>
                            <Grid item lg={12} md={12} sm={12}>
                                <Box className={`${cx('todays_slider')} ${cx('owl-carousel')}`}>
                                    <Box className={cx('owl-stage-outer')}>
                                        <Box className={cx('owl-stage')}>
                                            <Swiper
                                                effect={'coverflow'}
                                                grabCursor={true}
                                                centeredSlides={true}
                                                loopFillGroupWithBlank={true}
                                                loop={true}
                                                slidesPerView={'3'}
                                                coverflowEffect={{
                                                    rotate: 0,
                                                    stretch: 0,
                                                    depth: 100,
                                                    modifier: 2.5,
                                                }}
                                                pagination={{ el: '.swiper-pagination', clickable: true }}
                                                navigation={{
                                                    nextEl: '.swiper-button-next',
                                                    prevEl: '.swiper-button-prev',
                                                    clickable: true,
                                                }}
                                                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                                                className={cx('swiper_container')}
                                                autoplay={{
                                                    delay: 3000,
                                                    disableOnInteraction: false,
                                                }}
                                            >
                                                {data?.map((item, index) => (
                                                    <SwiperSlide key={index}>
                                                        <Box className={`${cx('owl-item')} ${cx('cloned')}`}>
                                                            <Box className={cx('product-wrappers-one')}>
                                                                <Box
                                                                    className={cx('thumb')}
                                                                    style={{ height: '414px' }}
                                                                >
                                                                    <Link to={'#'} className={cx('image-link')}>
                                                                        <img
                                                                            src={item.imageSrc_one}
                                                                            alt="image1"
                                                                            className={cx('image')}
                                                                        />
                                                                        <img
                                                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png"
                                                                            alt="image2"
                                                                            className={cx('image-hover')}
                                                                        />
                                                                    </Link>

                                                                    <Typography
                                                                        component="span"
                                                                        className={cx('badges')}
                                                                    >
                                                                        <Typography
                                                                            component="span"
                                                                            className={cx('new')}
                                                                        >
                                                                            New
                                                                        </Typography>
                                                                    </Typography>

                                                                    <Box className={cx('actions')}>
                                                                        <Link
                                                                            to={'#'}
                                                                            className={`${cx('action')} ${cx(
                                                                                'wishlist',
                                                                            )}`}
                                                                        >
                                                                            <AiOutlineHeart />
                                                                        </Link>
                                                                        <Link
                                                                            to={'#'}
                                                                            className={`${cx('action')} ${cx(
                                                                                'quickview',
                                                                            )}`}
                                                                        >
                                                                            <FaExpand />
                                                                        </Link>
                                                                        <Link
                                                                            to={'#'}
                                                                            className={`${cx('action')} ${cx(
                                                                                'compare',
                                                                            )}`}
                                                                        >
                                                                            <FaExchangeAlt />
                                                                        </Link>
                                                                    </Box>
                                                                    <Button
                                                                        size="small"
                                                                        className={cx('btn-add-to-cart')}
                                                                    >
                                                                        Add to cart
                                                                    </Button>
                                                                </Box>

                                                                <Box className={cx('content')}>
                                                                    <Typography component="h5" className={cx('title')}>
                                                                        <Link to={'#'} className={cx('title-link')}>
                                                                            Blue Dress For Women
                                                                        </Link>
                                                                    </Typography>
                                                                    <Typography
                                                                        component="span"
                                                                        className={cx('price')}
                                                                    >
                                                                        <Typography
                                                                            component="span"
                                                                            className={cx('new')}
                                                                        >
                                                                            $38.5
                                                                        </Typography>
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </SwiperSlide>
                                                ))}

                                                <div className="slider-controler">
                                                    <div className="swiper-button-prev slider-arrow">
                                                        <FaChevronLeft style={{ color: '#222224' }} />
                                                    </div>
                                                    <div className="swiper-button-next slider-arrow">
                                                        <FaChevronRight style={{ color: '#222224' }} />
                                                    </div>
                                                    <div className="swiper-pagination"></div>
                                                </div>
                                            </Swiper>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default TodaysArea;
