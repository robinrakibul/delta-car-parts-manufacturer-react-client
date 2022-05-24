import React, { useEffect, useState } from 'react';
import EachOrder from './EachOrder';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://manufacturer-node-server.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h2 className='mt-5 font-bold text-3xl mb-2'>All orders</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Order Email</th>
                            <th>Order Item Name</th>
                            <th>Order Item Price</th>
                            <th>Order Quantity</th>
                            <th>Order Address</th>
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