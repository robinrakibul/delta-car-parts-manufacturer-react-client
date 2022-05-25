import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleMyOrders = ({ order }) => {
    const { _id, name, price, quantity, address } = order;

    const handleDeleteAnItem = id => {
        const deletion = window.confirm('Do you really want to delete the item?');
        if (deletion) {
            const url = `https://manufacturer-node-server.herokuapp.com/myorders/${id}`;
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
        <div className=''>
            <div class="card w-full bg-base-100 shadow-xl border-2">
                <div class="card-body">
                    <h2>Product Name: <span class="card-title">{name}</span></h2>
                    <h2>Product Price: <span class="font-bold">{price}</span></h2>
                    <h2>Order Quantity: <span class="font-bold">{quantity}</span></h2>
                    <h2>Delivery Address: <span class="font-bold">{address}</span></h2>
                    <div class="card-actions justify-end">
                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-warning'>pay</button></Link>}
                        {(order.price && order.paid) && <div>
                            <p><span className='text-success'>Paid</span></p>
                            <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                        </div>}
                        {/* <!-- The button to open modal --> */}
                        {(!order.paid) && <button for="my-modal" class="btn modal-button" onClick={() => handleDeleteAnItem(_id)}>Delete</button>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMyOrders;