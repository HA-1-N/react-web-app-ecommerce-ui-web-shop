import React from 'react';
import BannerArea from './BannerArea/BannerArea';
import BlogArea from './BlogArea/BlogArea';
import CopyRight from './CopyRight/CopyRight';
import Footer from './Footer/Footer';
import HotProduct from './HotProduct/HotProduct';
import InstagramArea from './InstagramArea/InstagramArea';
import OfferTimeArea from './OfferTime/OfferTimeArea';
import ProductVariation from './ProductVariation/ProductVariation';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import TodaysArea from './TodaysArea/TodaysArea';

const Home = () => {
    return (
        <>
            <BannerArea />
            <ProductVariation />
            <HotProduct />
            <OfferTimeArea />
            <TodaysArea />
            <SpecialOffer />
            <BlogArea />
            <InstagramArea />
            <Footer />
            <CopyRight />
        </>
    );
};

export default Home;
