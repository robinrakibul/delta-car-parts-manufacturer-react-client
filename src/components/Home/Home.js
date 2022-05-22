import React from 'react';
import Banner from './Banner';
import 'flowbite';
import Cards from './Cards';
import Parts from '../Pages/Parts/Parts';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Parts></Parts>
        </div>
    );
};

export default Home;