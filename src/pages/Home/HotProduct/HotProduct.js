import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HotProduct.module.scss';
import { Box, Container, Grid, Stack, Typography, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { spacing_size } from '../../../utils/size/index';
import NewArrival from './NewArrival/NewArrival';
import Trending from './Trending/Trending';

const cx = classNames.bind(styles);

const ColorTheme = createTheme({
    palette: {
        primary: {
            main: '#f79837',
            contrastText: '#f79837',
        },
    },
});

const HotProduct = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <ThemeProvider theme={ColorTheme}>
                <Box className={cx('hot-product-area')}>
                    <Container maxWidth="lg">
                        <Stack direction="row" spacing={spacing_size}>
                            <Grid container spacing={spacing_size}>
                                <Grid item xs={12}>
                                    <Box className={cx('center-heading')}>
                                        <Typography variant="h2" className={cx('hot-product-title')}>
                                            Hot Product
                                        </Typography>
                                        <Typography className={cx('hot-product-para')}>
                                            Mauris luctus nisi sapien tristique dignissim ornare
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Stack>

                        <Stack direction="row" spacing={spacing_size}>
                            <Grid container spacing={spacing_size}>
                                <Grid item xs={12}>
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        <TabContext value={value}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <TabList
                                                    textColor="primary"
                                                    onChange={handleChange}
                                                    aria-label="lab API tabs example"
                                                    sx={{
                                                        '& div.MuiTabs-flexContainer': {
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                        },
                                                        '& button': { fontSize: '1.6rem' },
                                                    }}
                                                >
                                                    <Tab label="New Arrival" value="1" />
                                                    <Tab label="Trending" value="2" />
                                                    <Tab label="Best sellers" value="3" />
                                                </TabList>
                                            </Box>
                                            <TabPanel value="1">
                                                <NewArrival />
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <Trending />
                                            </TabPanel>
                                            <TabPanel value="3">Best sellers</TabPanel>
                                        </TabContext>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Container>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default HotProduct;
