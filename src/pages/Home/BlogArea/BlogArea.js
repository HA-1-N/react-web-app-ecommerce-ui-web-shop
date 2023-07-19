import React from 'react';

import classNames from 'classnames/bind';
import styles from './BlogArea.module.scss';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { spacing_size } from '../../../utils/size/index';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const cx = classNames.bind(styles);

const BlogArea = () => {
    return (
        <>
            <Box className={cx('blog-area-one')}>
                <Container maxWidth="lg">
                    <Grid container spacing={spacing_size}>
                        <Grid item lg={12} md={12} sm={12}>
                            <Box className={cx('center-heading')}>
                                <Typography component="h2" className={cx('blog-area-title')}>
                                    TODAY'S DEAL
                                </Typography>
                                <Typography className={cx('blog-area-para')}>
                                    Mauris luctus nisi sapien tristique dignissim ornare
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={spacing_size}>
                        <Grid item lg="4" md="12" sm="12">
                            <Box className={`${cx('blog-one-item')} ${cx('img-zoom-hover')}`}>
                                <Box className={cx('blog-one-img')}>
                                    <Link to={'#'} className={cx('link')}>
                                        <img
                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/blog/post1.png"
                                            alt="image_1"
                                            className={cx('image')}
                                        />
                                    </Link>
                                </Box>

                                <Box className={cx('blog-text')}>
                                    <Typography component="h5" className={cx('date-area')}>
                                        <Link to="#" className={cx('date-area-link')}>
                                            16 November 2022
                                        </Link>
                                    </Typography>
                                    <Typography component="h4" className={cx('heading')}>
                                        <Link to="#" className={cx('heading-link')}>
                                            16 November 2022
                                        </Link>
                                    </Typography>
                                    <Typography className={cx('para')}>
                                        Similar smocked bodice and full sleeves but also so different from the dress
                                        above!
                                    </Typography>

                                    <Button className={cx('btn-read-more')}>
                                        Read More{' '}
                                        <FaArrowRight
                                            style={{
                                                marginLeft: '1rem',
                                            }}
                                        />
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg="4" md="12" sm="12">
                            <Box className={`${cx('blog-one-item')} ${cx('img-zoom-hover')}`}>
                                <Box className={cx('blog-one-img')}>
                                    <Link to={'#'} className={cx('link')}>
                                        <img
                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/blog/post1.png"
                                            alt="image_1"
                                            className={cx('image')}
                                        />
                                    </Link>
                                </Box>

                                <Box className={cx('blog-text')}>
                                    <Typography component="h5" className={cx('date-area')}>
                                        <Link to="#" className={cx('date-area-link')}>
                                            16 November 2022
                                        </Link>
                                    </Typography>
                                    <Typography component="h4" className={cx('heading')}>
                                        <Link to="#" className={cx('heading-link')}>
                                            16 November 2022
                                        </Link>
                                    </Typography>
                                    <Typography className={cx('para')}>
                                        Similar smocked bodice and full sleeves but also so different from the dress
                                        above!
                                    </Typography>

                                    <Button className={cx('btn-read-more')}>
                                        Read More{' '}
                                        <FaArrowRight
                                            style={{
                                                marginLeft: '1rem',
                                            }}
                                        />
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg="4" md="12" sm="12">
                            <Box className={`${cx('blog-one-item')} ${cx('img-zoom-hover')}`}>
                                <Box className={cx('blog-one-img')}>
                                    <Link to={'#'} className={cx('link')}>
                                        <img
                                            src="https://andit.co/projects/html/andshop/andshop_frontend/assets/img/blog/post1.png"
                                            alt="image_1"
                                            className={cx('image')}
                                        />
                                    </Link>
                                </Box>

                                <Box className={cx('blog-text')}>
                                    <Typography component="h5" className={cx('date-area')}>
                                        <Link to="#" className={cx('date-area-link')}>
                                            16 November 2022
                                        </Link>
                                    </Typography>
                                    <Typography component="h4" className={cx('heading')}>
                                        <Link to="#" className={cx('heading-link')}>
                                            16 November 2022
                                        </Link>
                                    </Typography>
                                    <Typography className={cx('para')}>
                                        Similar smocked bodice and full sleeves but also so different from the dress
                                        above!
                                    </Typography>

                                    <Button className={cx('btn-read-more')}>
                                        Read More{' '}
                                        <FaArrowRight
                                            style={{
                                                marginLeft: '1rem',
                                            }}
                                        />
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default BlogArea;
