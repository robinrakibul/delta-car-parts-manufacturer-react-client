import React from 'react';
import Banner from './Banner';
import 'flowbite';
import Cards from './Cards';
import BusinessInfo from './BusinessInfo';
import Parts from '../Pages/Parts/Parts';
import Reviews from '../Pages/Reviews/Reviews';
import FlashDeal from './FlashDeal';
import Contact from '../Pages/Contact/Contact';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Parts></Parts>
            <Reviews></Reviews>
            <FlashDeal></FlashDeal>
            <BusinessInfo></BusinessInfo>
            <Contact></Contact>
        </div>
    );
};

export default Home;