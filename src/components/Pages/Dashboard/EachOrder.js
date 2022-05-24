import React from 'react';

const EachOrder = ({ order }) => {
    const { _id, productId, orderEmail, orderItemName, orderItemPrice, orderQuantity, orderAddress } = order;
    return (
        <tbody>
            {/* <!-- row --> */}
            <tr>
                <th>{productId}</th>
                <td>{orderEmail}</td>
                <td>{orderItemName}</td>
                <td>${orderItemPrice}</td>
                <td>{orderQuantity}</td>
                <td>{orderAddress}</td>
            </tr>
        </tbody>
    );
};

export default EachOrder;