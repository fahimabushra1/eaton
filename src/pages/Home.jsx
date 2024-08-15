import React from 'react';
import Banner from '../components/home/Banner';
import AppDownload from '../components/home/AppDownload';
import Categories from '../components/home/Categories';
import Delivery from '../components/home/Delivery';
import Packaging from '../components/home/Packaging';
import Offers from '../components/home/Offers';

const Home = () => {
    return (
        <div>
           <Banner/>
           <AppDownload/>
           <Categories/>
           <Delivery/>
           <Packaging/>
           <Offers/>
        </div>
    );
};

export default Home;