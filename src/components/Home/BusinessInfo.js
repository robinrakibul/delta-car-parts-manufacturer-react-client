import React from 'react';

const businessInfo = () => {
    return (
        <div id='businessInfo'>
            <h1 className='mt-10 mb-1 text-3xl font-semibold text-center'>BUSINESS SUMMARY</h1>
            <h2 className='text-lg font-light mx-auto w-1/2 mb-5'>Success is not final, failure is not fatal, It is the courage to continue that counts.</h2>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5 mb-10'>
                <div class="card w-3/4 h-96 mx-auto bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1498887960847-2a5e46312788?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869" alt='' /></figure>
                    <div class="card-body items-center">
                        <img src="https://img.icons8.com/bubbles/100/000000/man-with-glasses-shopping-cart.png" width='100px' alt="" />
                        <h2 class="card-title">We Served 100k+ Customers!</h2>
                        <h3 className='font-light mt-2'>We are a successful manufacturer worldwide. We are here to serve more people.</h3>
                    </div>
                </div>
                <div class="card w-full h-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1581091871235-868c13b39a42?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870" alt="" /></figure>
                    <div class="card-body items-center">
                        <img src="https://img.icons8.com/nolan/96/profit-analysis.png" width='100px' alt="" />
                        <h2 class="card-title">120M+ Annual Revenue</h2>
                        <h3 className='font-light m-5'>We have a great revenue as a manufacturer company, can compete with other great companies. Read about us and know more.</h3>
                    </div>
                </div>
                <div class="card w-3/4 h-96 mx-auto bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1487101588220-01e039029925?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387" alt="" /></figure>
                    <div class="card-body items-center">
                        <img src="https://img.icons8.com/color/96/000000/portraits.png" width='100px' alt="" />
                        <h2 class="card-title">50+ Car Parts</h2>
                        <h3 className='font-light mt-2'>We have more than fifty different car parts in stock. We are bringing more new parts in our stock everyday.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default businessInfo;