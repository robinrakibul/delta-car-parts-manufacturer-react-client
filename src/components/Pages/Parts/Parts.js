import React, { useEffect, useState } from 'react';
import SingleParts from './SingleParts';

const Parts = () => {
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/items')
            .then(res => res.json())
            .then(data => setitems(data))
    }, [items])
    return (
        <div className=''>
            <h1 className='mt-10 mb-1 text-3xl font-semibold text-center'>ALL THE CAR PARTS </h1>
            <h2 className='text-lg font-light mx-auto w-1/2 mb-5'>All best seller product are now available for you and your can buy this product from here any time any where so sop now</h2>
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