import React from 'react';

const SingleParts = ({ item }) => {
    const { _id, title, image, price, description, supplier, quantity, minOrder } = item;
    return (
        <div className='flex justify-center mb-5'>
            <div className="card w-96 glass rounded-lg shadow-xl p-5">
                <h5 className="text-gray-900 text-xl font-medium mb-5">{title}</h5>
                <figure><img src={image} alt="" width="300px" className="rounded-t-lg object-cover" /></figure>
                <p className='font-bold'>Price: <span className='text-blue-500 '>{'$' + price}</span></p>
                <small>Supplier: {supplier}</small>
                <p className='text-xl font-bold'>Available Quantity: {quantity}</p>
                <p className='text-xl font-bold'>Minimum Order Required: {minOrder}</p>
                <p className="text-gray-700 text-base">
                    {description.slice(0, 50)}...
                </p>
            </div>
        </div>
    );
};

export default SingleParts;