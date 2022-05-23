import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';

const Purchase = () => {

    // For quantity
    const [items, setitems] = useState([]);

    useEffect(() => {
        const url = `https://manufacturer-node-server.herokuapp.com/items/${itemsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setitems(data))
    }, [items]) /* updates everytime item quantity changes */

    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        // data.address use this to store address
    }
    const { itemsId } = useParams();
    const [user] = useAuthState(auth);
    return (
        <div className='flex justify-center'>
            <div className="max-w-lg bg-white text-red rounded-lg shadow-md border-2 pt-5 pl-5 pr-5 m-5">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-3 mb-3">Your Name: <span className='font-light'>{user.displayName}</span></h1>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-3 mb-3">Your Email: <span className='font-light'>{user.email}</span></h1>
                <hr />
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-3 mb-3">Purchasing Item Details:</h1>
                <h5 className="text-lg tracking-tight text-gray-900 dark:text-white"><span className='font-semibold'>Product Name: </span>{items.title}</h5>
                <img className="p-4 rounded-lg border-2 mt-2 mb-2 w-96" src={items.image} alt="" />
                <h5 className="text-lg tracking-tight text-gray-900 dark:text-white"><span className='font-semibold'>Description: </span>{items.description}</h5>
                <h5 className="text-xl border-t-2 border-b-2 border-yellow-400 tracking-tight text-gray-900 dark:text-white">Available Total: <span className='font-bold'>{items.quantity}</span></h5>
                <h5 className="text-xl border-yellow-400 tracking-tight text-gray-900 dark:text-white">Minimum Order Quantity: <span className='font-bold'>{items.minOrder}</span></h5>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-rows-2 gap-4 mt-10'>
                    <textarea
                        type="text"
                        placeholder="Your Address"
                        className="input input-bordered w-full"
                        {...register("address", {
                            required: {
                                value: true,
                                message: 'Address is Required'
                            }
                        })}
                    />
                    <div className='grid justify-center text-white'>
                        <button className='pt-3 pb-3 pl-4 pr-4 w-52 rounded bg-yellow-400 hover:bg-yellow-500 mb-5' data-mdb-ripple="true" data-mdb-ripple-color="light">Complete Purchase</button>
                    </div>
                </form>
            </div>
        </div>


    );
};

export default Purchase;