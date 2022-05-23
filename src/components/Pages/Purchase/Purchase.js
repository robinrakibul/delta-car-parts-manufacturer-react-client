import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    // For quantity
    const [items, setitems] = useState([]);

    useEffect(() => {
        const url = `https://manufacturer-node-server.herokuapp.com/items/${itemsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setitems(data))
    }, [items]) /* updates everytime item quantity changes */

    const { itemsId } = useParams();
    return (
        <div className='grid grid-flow-col justify-center'>
            <div className="max-w-sm bg-white text-red rounded-lg shadow-md border-2 p-5 m-5">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-3 mb-3">Purchasing Item Details:</h1>
                <h5 className="text-lg tracking-tight text-gray-900 dark:text-white"><span className='font-semibold'>Product Name: </span>{items.title}</h5>
                <img className="p-4 rounded-3xl" src={items.image} alt="" />
                <h5 className="text-lg tracking-tight text-gray-900 dark:text-white"><span className='font-semibold'>Description: </span>{items.description}</h5>
                <h5 className="text-xl border-t-2 border-b-2 border-yellow-400 tracking-tight text-gray-900 dark:text-white">Available Total: <span className='font-bold'>{items.quantity}</span></h5>
                <h5 className="text-xl border-yellow-400 tracking-tight text-gray-900 dark:text-white">Minimum Order Quantity: <span className='font-bold'>{items.minOrder}</span></h5>
            </div>
        </div>


    );
};

export default Purchase;