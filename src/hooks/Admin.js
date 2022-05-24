import { useEffect, useState } from 'react';

const Admin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(()=>{
        const email = user?.email;
        if (email) {
            fetch(`https://manufacturer-node-server.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                })
        }
    },[user])
    return [admin]
};

export default Admin;