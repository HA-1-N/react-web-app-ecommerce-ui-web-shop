import React from 'react';
import classNames from 'classnames/bind';
import styles from './Trending.module.scss';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { spacing_size } from '../../../../utils/size/index';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaExchangeAlt, FaExpand } from 'react-icons/fa';

const cx = classNames.bind(styles);

const Trending = () => {
    return (
        <>
            <Box>
                <Container maxWidth="lg">
                    <Grid container spacing={spacing_size}>
                        <Grid item lg={3} md={6} sm={12}>
                            <Box className={cx('product-wrappers-one')}>
                                <Box className={cx('thumb')}>
                                    <Link to={'#'} className={cx('image-link')}>
                                        <img
                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product1.png"
                                            alt="image1"
                                            className={cx('image')}
                                        />
                                        <img
                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png"
                                            alt="image2"
                                            className={cx('image-hover')}
                                        />
                                    </Link>
                                    <Typography component="span" className={cx('badges')}>
                                        <Typography component="span" className={cx('new')}>
                                            New
                                        </Typography>
                                    </Typography>
                                    <Box className={cx('actions')}>
                                        <Link to={'#'} className={`${cx('action')} ${cx('wishlist')}`}>
                                            <AiOutlineHeart />
                                        </Link>
                                        <Link to={'#'} className={`${cx('action')} ${cx('quickview')}`}>
                                            <FaExpand />
                                        </Link>
                                        <Link to={'#'} className={`${cx('action')} ${cx('compare')}`}>
                                            <FaExchangeAlt />
                                        </Link>
                                    </Box>
                                    <Button size="small" className={cx('btn-add-to-cart')}>
                                        Add to cart
                                    </Button>
                                </Box>
                                <Box className={cx('content')}>
                                    <Typography component="h5" className={cx('title')}>
                                        <Link to={'#'} className={cx('title-link')}>
                                            Blue Dress For Women
                                        </Link>
                                    </Typography>
                                    <Typography component="span" className={cx('price')}>
                                        <Typography component="span" className={cx('new')}>
                                            $38.5
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={6} sm={12}>
                            <Box className={cx('product-wrappers-one')}>
                                <Box className={cx('thumb')}>
                                    <Link to={'#'} className={cx('image-link')}>
                                        <img
                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product1.png"
                                            alt="image1"
                                            className={cx('image')}
                                        />
                                        <img
                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png"
                                            alt="image2"
                                            className={cx('image-hover')}
                                        />
                                    </Link>
                                    <Typography component="span" className={cx('badges')}>
                                        <Typography component="span" className={cx('new')}>
                                            New
                                        </Typography>
                                    </Typography>
                                    <Box className={cx('actions')}>
                                        <Link to={'#'} className={`${cx('action')} ${cx('wishlist')}`}>
                                            <AiOutlineHeart />
                                        </Link>
                                        <Link to={'#'} className={`${cx('action')} ${cx('quickview')}`}>
                                            <FaExpand />
                                        </Link>
                                        <Link to={'#'} className={`${cx('action')} ${cx('compare')}`}>
                                            <FaExchangeAlt />
                                        </Link>
                                    </Box>
                                    <Button size="small" className={cx('btn-add-to-cart')}>
                                        Add to cart
                                    </Button>
                                </Box>
                                <Box className={cx('content')}>
                                    <Typography component="h5" className={cx('title')}>
                                        <Link to={'#'} className={cx('title-link')}>
                                            Blue Dress For Women
                                        </Link>
                                    </Typography>
                                    <Typography component="span" className={cx('price')}>
                                        <Typography component="span" className={cx('new')}>
                                            $38.5
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={6} sm={12}>
                            <Box className={cx('product-wrappers-one')}>
                                <Box className={cx('thumb')}>
                                    <Link to={'#'} className={cx('image-link')}>
                                        <img
                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product1.png"
                                            alt="image1"
                                            className={cx('image')}
                                        />
                                        <img
                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png"
                                            alt="image2"
                                            className={cx('image-hover')}
                                        />
                                    </Link>
                                    <Typography component="span" className={cx('badges')}>
                                        <Typography component="span" className={cx('new')}>
                                            New
                                        </Typography>
                                    </Typography>
                                    <Box className={cx('actions')}>
                                        <Link to={'#'} className={`${cx('action')} ${cx('wishlist')}`}>
                                            <AiOutlineHeart />
                                        </Link>
                                        <Link to={'#'} className={`${cx('action')} ${cx('quickview')}`}>
                                            <FaExpand />
                                        </Link>
                                        <Link to={'#'} className={`${cx('action')} ${cx('compare')}`}>
                                            <FaExchangeAlt />
                                        </Link>
                                    </Box>
                                    <Button size="small" className={cx('btn-add-to-cart')}>
                                        Add to cart
                                    </Button>
                                </Box>
                                <Box className={cx('content')}>
                                    <Typography component="h5" className={cx('title')}>
                                        <Link to={'#'} className={cx('title-link')}>
                                            Blue Dress For Women
                                        </Link>
                                    </Typography>
                                    <Typography component="span" className={cx('price')}>
                                        <Typography component="span" className={cx('new')}>
                                            $38.5
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item lg={3} md={6} sm={12}>
                            <Box className={cx('product-wrappers-one')}>
                                <Box className={cx('thumb')}>
                                    <Link to={'#'} className={cx('image-link')}>
                                        <img
                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product1.png"
                                            alt="image1"
                                            className={cx('image')}
                                        />
                                        <img
                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/product-image/product2.png"
                                            alt="image2"
                                            className={cx('image-hover')}
                                        />
                                    </Link>
                                    <Typography component="span" className={cx('badges')}>
                                        <Typography component="span" className={cx('new')}>
                                            New
                                        </Typography>
                                    </Typography>
                                    <Box className={cx('actions')}>
                                        <Link to={'#'} className={`${cx('action')} ${cx('wishlist')}`}>
                                            <AiOutlineHeart />
                                        </Link>
                                        <Link to={'#'} className={`${cx('action')} ${cx('quickview')}`}>
                                            <FaExpand />
                                        </Link>
                                        <Link to={'#'} className={`${cx('action')} ${cx('compare')}`}>
                                            <FaExchangeAlt />
                                        </Link>
                                    </Box>
                                    <Button size="small" className={cx('btn-add-to-cart')}>
                                        Add to cart
                                    </Button>
                                </Box>
                                <Box className={cx('content')}>
                                    <Typography component="h5" className={cx('title')}>
                                        <Link to={'#'} className={cx('title-link')}>
                                            Blue Dress For Women
                                        </Link>
                                    </Typography>
                                    <Typography component="span" className={cx('price')}>
                                        <Typography component="span" className={cx('new')}>
                                            $38.5
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Trending;
