import React, { useEffect, useState } from 'react';
import EachOrder from './EachOrder';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://manufacturer-node-server.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
    return (
        <div>
            <h2 className='mt-5 font-bold text-3xl mb-2'>All orders</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Order Item Name</th>
                            <th>Order Email</th>
                            <th>Product ID</th>
                            <th>Order Item Price</th>
                            <th>Order Quantity</th>
                            <th>Total Cost</th>
                            <th>Order Address</th>
                            <th>Paid</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <EachOrder key={order._id} order={order}></EachOrder>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllOrders;