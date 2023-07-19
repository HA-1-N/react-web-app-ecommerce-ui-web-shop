import { Box, Button, Container, Grid, List, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';

import classNames from 'classnames/bind';
import styles from './OfferTimeArea.module.scss';
import { spacing_size } from '../../../utils/size/index';

const cx = classNames.bind(styles);

const OfferTimeArea = () => {
    return (
        <>
            <Box className={cx('offer-time-one')}>
                <Container maxWidth="lg">
                    <Grid container spacing={spacing_size}>
                        <Grid item lg={4} md={4} sm={12}></Grid>
                        <Grid item lg={8} md={4} sm={12}>
                            <Stack direction="row" spacing={spacing_size}>
                                <Box className={cx('count_down')}>
                                    <Box className={'countdown'}>
                                        <List sx={{ width: '100%' }}>
                                            <ListItem>
                                                <Typography component="span">78</Typography>
                                            </ListItem>
                                        </List>
                                    </Box>
                                    <Box className={cx('offer-timer-text')}>
                                        <Typography component="h2" className={cx('offer-timer-text-title')}>
                                            20% OFF FOR ALL T-SHIRT COLLECTION
                                        </Typography>
                                        <Typography className={cx('offer-timer-text-params')}>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quisquam,
                                            odit assumenda sit modi commodi esse necessitatibus temporibus aperiam
                                            veritatis eveniet!
                                        </Typography>
                                        <Button className={cx('offer-timer-view')}>View more</Button>
                                    </Box>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default OfferTimeArea;
