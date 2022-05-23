import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleParts = ({ item }) => {
    const { _id, title, image, price, description, supplier, quantity, minOrder } = item;

    const navigate = useNavigate();
    const itemPurchaseNavigation = id => {
        navigate(`/items/${id}`)
    }
    
    return (
        <div className='flex justify-center mb-5'>
            <div className="card w-96 glass rounded-lg shadow-xl pl-5 pr-5 pb-2 pt-2">
                <h5 className="text-blue-700 text-xl font-medium mb-5 mt-2">Name: {title}</h5>
                <figure><img src={image} alt="" className="rounded-lg object-fill max-w-72 max-h-72 cursor-pointer" /></figure>
                <p className='font-bold mt-4'>Price: <span className='text-blue-500 '>{'$' + price}</span></p>
                <small>Supplier: {supplier}</small>
                <p className='text-xl font-bold mt-2'>Available Quantity: {quantity}</p>
                <p className='text-xl font-bold mt-2'>Minimum Order Required: {minOrder}</p>
                <p className="text-gray-700 text-base mt-2">
                    Description: {description.slice(0, 55)}...
                </p>
                <div className='text-center'>
                    <button type="button" onClick={() => itemPurchaseNavigation(_id)} className=" inline-block px-4 py-4 mb-5 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-400 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-500 active:shadow-lg transition duration-150 ease-in-out mt-10">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleParts;