import React from 'react';
import { toast } from 'react-toastify';

const ManageEachProducts = ({ item }) => {
    const { _id, title, image, price, description, quantity, minOrder } = item;

    const handleDeleteAnItem = id => {
        const deletion = window.confirm('Do you really want to delete the item?');
        if (deletion) {
            const url = `https://manufacturer-node-server.herokuapp.com/items/${id}`;
            console.log(id);
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Item has been deleted successfully');
                })
        }

    }

    return (
        <div>
            <div className='flex justify-center mb-5'>
                <div className="card w-96 glass rounded-lg shadow-xl pl-5 pr-5 pb-2 pt-2">
                    <h5 className="text-blue-700 text-xl font-medium mb-5 mt-2">Name: {title}</h5>
                    <figure><img src={image} alt="" className="rounded-lg object-fill max-w-72 max-h-72 cursor-pointer" /></figure>
                    <p className='font-bold mt-4'>Price: <span className='text-blue-500 '>{'$' + price}</span></p>
                    <p className='text-xl font-bold mt-2'>Available Quantity: {quantity}</p>
                    <p className='text-xl font-bold mt-2'>Minimum Order Required: {minOrder}</p>
                    <p className="text-gray-700 text-base mt-2">
                        Description: {description.slice(0, 55)}...
                    </p>
                    <div className='text-center'>
                        <button type="button" onClick={() => handleDeleteAnItem(_id)} className="inline-block px-4 py-4 mb-5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-lg transition duration-150 ease-in-out mt-10">Delete Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageEachProducts;