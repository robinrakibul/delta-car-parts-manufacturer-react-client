import React from 'react';
import { toast } from 'react-toastify';

const EachOrder = ({ order }) => {
    const { _id, productId, email, name, price, quantity, totalCost, address, paid, status } = order;
    const handleStatus = (id) => {
        const url = `https://warehouse-management-server-99fk.onrender.com/allorders/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    const handleDeleteAnItem = id => {
        const deletion = window.confirm('Do you really want to delete the item?');
        if (deletion) {
            const url = `https://warehouse-management-server-99fk.onrender.com/myorders/${id}`;
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
        <tbody>
            {/* <!-- row --> */}
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{productId}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td>${totalCost}</td>
                <td>{address}</td>
                <td>{paid ? <p className='text-green-500'>Paid</p> : <p className='text-red-500'>Unpaid</p>}</td>
                <td>{status? <p>Status: <span className='text-green-500 mb-3'>Shipped</span></p> : <p>Status: <span className='text-red-500 mb-3'>Pending</span></p>}
                    <p className='text-white btn btn-error btn-xs' onClick={()=>{handleStatus(_id)}}>Change Status</p>
                </td>
                <td><button className="btn btn-xs" onClick={() => handleDeleteAnItem(_id)}>Cancel Order</button></td>

            </tr>
        </tbody>
    );
};

export default EachOrder;