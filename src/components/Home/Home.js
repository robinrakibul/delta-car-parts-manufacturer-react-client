import React from 'react';
import Banner from './Banner';
import 'flowbite';
import Cards from './Cards';
import BusinessInfo from './BusinessInfo';
import Parts from '../Pages/Parts/Parts';
import Reviews from '../Pages/Reviews/Reviews';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Parts></Parts>
            <Reviews></Reviews>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Home;