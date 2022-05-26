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
                            <td>Order Item</td>
                            <td>Order Email</td>
                            <td>Product ID</td>
                            <td>Order Item Price</td>
                            <td>Order Quantity</td>
                            <td>Total Cost</td>
                            <td>Order Address</td>
                            <td>Paid</td>
                            <td>Status</td>
                            <td>Cancel Order</td>
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