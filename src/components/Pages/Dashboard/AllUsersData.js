import React from 'react';
import { toast } from 'react-toastify';

const AllUsersData = ({ user, refetch }) => {
    const { email,role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success(`Successfully made an admin`);
            })

    }
    return (
        <div>
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button className='btn btn-xs' onClick={makeAdmin}>Make Admin</button>}</td>
                <td><button className='btn btn-xs'>Delete User</button></td>
            </tr>
        </div>
    );
};

export default AllUsersData;