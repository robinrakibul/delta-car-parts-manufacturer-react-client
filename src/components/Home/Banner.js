import React from 'react';
import { HashLink } from 'react-router-hash-link';
import engine from '../../images/car-engine.webp';
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={engine} className="lg:max-w-lg max-w-xs rounded-3xl shadow-xl p-5" alt='' />
                <div className='ml-10 mr-10'>
                    <h1 className="text-lg font-bold">Delta Manufacturer</h1>
                    <p className="py-6 md:text-6xl font-semibold text-4xl">Best Auto Car Parts Available!</p>
                    <HashLink to='/home#contact' className="btn btn-white text-base uppercase pl-12 pr-12 mt-5">Contact Us</HashLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;