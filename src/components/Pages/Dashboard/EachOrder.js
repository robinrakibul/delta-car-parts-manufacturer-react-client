import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const EachOrder = ({ order }) => {
    const { _id, productId, email, name, price, quantity, totalCost, address, paid, status } = order;
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
        <tbody>
            {/* <!-- row --> */}
            <tr>
                <th>{name}</th>
                <td>{email}</td>
                <td>{productId}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td>${totalCost}</td>
                <td>{address}</td>
                <td>{paid ? <p className='text-green-500'>Paid</p> : <p className='text-red-500'>Unpaid</p>}</td>
                <td><p>Status: <span className='text-red-500'>Pending</span></p> <select className='rounded m-2'>
                    <option value="pending">Pending</option>
                    <option value="shipped">Shipped </option>
                </select>
                    <br />
                    <p className='text-white btn btn-error btn-xs'>Change Status</p>
                </td>
                <td><button class="btn btn-xs" onClick={() => handleDeleteAnItem(_id)}>Delete</button></td>

            </tr>
        </tbody>
    );
};

export default EachOrder;