import React from 'react';
import { HashLink } from 'react-router-hash-link';
import rim from '../../images/rim.png';
const FlashDeal = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-black text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={rim} alt='' className="max-w-xs w-52 md:w-full lg:w-full md:max-w-md lg:max-w-lg rounded-lg ml-5 mr-5" />
                    <div className='ml-0 md:ml-36 mr-5 w-2/3'>
                        <h1 className="text-6xl font-bold mb-3">FLASH DEALS</h1>
                        <p className="text-4xl font-light">HURRY UP AND GET 25% DISCOUNT</p>
                        <HashLink to='/home#tools' className="btn gap-2 bg-yellow-400 border-0 pl-10 pr-10 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            Purchase Now
                        </HashLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashDeal;