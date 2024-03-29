import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleMyOrders = ({ order }) => {
    const { _id, name, price, quantity, address } = order;

    const handleDeleteAnItem = id => {
        const deletion = window.confirm('Do you really want to delete the item?');
        if (deletion) {
            const url = `https://manufacturer-node-server.onrender.com/myorders/${id}`;
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
            <div className="card w-full bg-base-100 shadow-xl border-2 mb-8">
                <div className="card-body">
                    <h2>Product Name: <span className="card-title">{name}</span></h2>
                    <h2>Product Price: <span className="font-bold">{price}</span></h2>
                    <h2>Order Quantity: <span className="font-bold">{quantity}</span></h2>
                    <h2>Delivery Address: <span className="font-bold">{address}</span></h2>
                    <div className="card-actions justify-end">
                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-warning'>pay</button></Link>}
                        {(order.price && order.paid) && <div>
                            <p><span className='text-success'>Paid</span></p>
                            <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                        </div>}
                        {/* <!-- The button to open modal --> */}
                        {(!order.paid) && <button htmlFor="my-modal" className="btn modal-button" onClick={() => handleDeleteAnItem(_id)}>Delete</button>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMyOrders;