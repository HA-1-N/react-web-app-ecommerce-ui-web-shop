import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import classNames from 'classnames/bind';
import styles from './Special.module.scss';
import { spacing_size } from '../../../utils/size/index';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const SpecialOffer = () => {
    return (
        <>
            <Box className={cx('special-offer-one')}>
                <Container maxWidth="lg">
                    <Grid container spacing={spacing_size}>
                        <Grid item lg={4} md={12} sm={12}></Grid>
                        <Grid item lg={4} md={12} sm={12}>
                            <Box className={cx('offer-banner-one')}>
                                <Typography component="h5" className={cx('title')}>
                                    Trending
                                </Typography>
                                <Typography component="h2" className={cx('title-new')}>
                                    New fashion
                                </Typography>
                                <Typography className={cx('para')}>
                                    Consectetur adipisicing elit. Dolores nisi distinctio magni, iure deserunt doloribus
                                    optio
                                </Typography>
                                <Link to={'#'} className={cx('link')}>
                                    Shop now
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={12} sm={12}></Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default SpecialOffer;
