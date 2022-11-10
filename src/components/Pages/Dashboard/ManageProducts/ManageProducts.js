import React, { useEffect, useState } from 'react';
import ManageEachProducts from './ManageEachProducts';

const ManageProducts = () => {
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('https://warehouse-management-server-99fk.onrender.com/items')
            .then(res => res.json())
            .then(data => setitems(data))
    }, [items])
    return (
        <div>
            <h2 className='mt-5 font-bold text-3xl mb-2'>Manage Products</h2>
            <div className='' id='tools'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    {
                        items.map(item =>
                            <ManageEachProducts key={item._id} item={item}></ManageEachProducts>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;