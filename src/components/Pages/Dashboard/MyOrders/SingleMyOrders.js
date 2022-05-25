import React from 'react';
import { Link } from 'react-router-dom';

const SingleMyOrders = ({ order }) => {
    return (
        <div className=''>
            <div class="card w-full bg-base-100 shadow-xl border-2">
                <div class="card-body">
                    <h2>Product Name: <span class="card-title">{order.name}</span></h2>
                    <h2>Product Price: <span class="font-bold">{order.price}</span></h2>
                    <h2>Order Quantity: <span class="font-bold">{order.quantity}</span></h2>
                    <h2>Delivery Address: <span class="font-bold">{order.address}</span></h2>
                    <div class="card-actions justify-end">
                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-warning'>pay</button></Link>}
                        {(order.price && order.paid) && <div>
                            <p><span className='text-success'>Paid</span></p>
                            <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                        </div>}
                        {/* <!-- The button to open modal --> */}
                        <label for="my-modal" class="btn modal-button">Delete</label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="my-modal" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Are you sure to delete the order?</h3>
                                <div class="modal-action">
                                    <label for="my-modal" class="btn btn-error">Delete</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleMyOrders;