import React, { useEffect, useState } from 'react';
import SingleParts from './SingleParts';

const Parts = () => {
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('https://manufacturer-node-server.onrender.com/items')
            .then(res => res.json())
            .then(data => setitems(data))
    }, [items])
    return (
        <div className='' id='tools'>
            <h1 className='mt-10 mb-1 text-3xl font-semibold text-center'>ALL THE CAR PARTS </h1>
            <h2 className='text-lg font-light mx-auto w-1/2 mb-5'>All best seller product are now available for you and your can buy this product from here as a bulk and start making your profit</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    items.map(item =>
                        <SingleParts key={item._id} item={item}>
                        </SingleParts>)
                }
            </div>
        </div>
    );
};

export default Parts;