import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SingleMyItems from './SingleMyOrders';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [items, setitems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://warehouse-management-server-99fk.onrender.com/myorders?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setitems(data);
        }
        getItems();
    }, [items])
    return (
        <div>
            <h1 className='mt-5 font-bold text-3xl mb-2'>Your Orders</h1>
            {/* Add items to see your items in my items */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5'>
                {
                    items.map(order => <SingleMyItems key={order._id} order={order}></SingleMyItems>)
                }
            </div>
        </div>
    );
};

export default MyOrders;