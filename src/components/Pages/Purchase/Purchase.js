import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {

    // For quantity
    const [items, setitems] = useState([]);
    const quantityInputRef = useRef('');

    useEffect(() => {
        const url = `https://manufacturer-node-server.herokuapp.com/items/${itemsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setitems(data))
    }, [items])

    const { itemsId } = useParams();
    const [user] = useAuthState(auth);

    const handleOrder = event => {
        event.preventDefault();

        const order = {
            orderId: items._id,
            orderItemName: items.title,
            orderItemPrice: items.price,
            orderQuantity: event.target.quantityInput.value,
            orderAddress: event.target.address.value,
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged==true){
                    toast.success('Order successfully added')
                }
                else(
                    toast.error('Order failed, try again later')
                )
            })
    }
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
                <h5 className="text-xl border-t-2 border-b-2 border-yellow-400 tracking-tight text-gray-900 dark:text-white">Available Quantity: <span className='font-bold'>{items.quantity}</span></h5>
                <hr />
                <form className='grid grid-rows-2 gap-4 mt-10' onSubmit={handleOrder}>
                    <h5 className="text-xl border-yellow-400 tracking-tight text-gray-900 dark:text-white">Insert Your Order Quantity:
                        <span className='font-bold'>
                            <input min={items.minOrder} max={items.quantity}
                                type="number" name='quantityInput' required
                                placeholder="Order Quantity" ref={quantityInputRef}
                                className="rounded-lg input-bordered w-full"
                            />
                        </span>
                    </h5>
                    <textarea className='rounded-lg input-bordered w-full' name="address" placeholder="Your Address" type="text" required></textarea>
                    <input
                        type="number" name='number' required
                        placeholder="Your Phone Number"
                        className="rounded-lg input-bordered w-full"
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