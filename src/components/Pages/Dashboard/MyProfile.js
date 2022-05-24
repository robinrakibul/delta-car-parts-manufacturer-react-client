import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        fetch(`https://manufacturer-node-server.herokuapp.com/users/${email}`,{
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => setProfiles(data))
    }, [])
    return (
        <div className='m-3'>
            {
               profiles.map(EachProfile =>
                <EachProfile key={EachProfile._id} EachProfile={EachProfile}>
                </EachProfile>)
            }
        </div>
    );
};

export default MyProfile;