import React from 'react';

const EachOrder = ({ order }) => {
    const { _id, productId, email, name, price, quantity, address } = order;
    return (
        <tbody>
            {/* <!-- row --> */}
            <tr>
                <th>{productId}</th>
                <td>{email}</td>
                <td>{name}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td>{address}</td>
            </tr>
        </tbody>
    );
};

export default EachOrder;