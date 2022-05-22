import React, { useEffect, useState } from 'react';
import SingleReviews from './SingleReviews';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://manufacturer-node-server.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <div id='reviews'>
                <h1 className='mt-10 mb-1 text-3xl font-semibold text-center'>BUYER REVIEWS</h1>
                <h2 className='text-lg font-light mx-auto w-1/2 mb-5'>Many of our buyers are happy with our products and left some reviews</h2>
            </div>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5'>
                {
                    reviews.map(review => (
                        <SingleReviews key={review._id} review={review}></SingleReviews>
                    ))
                }
            </div>
        </>
    );
};

export default Reviews;