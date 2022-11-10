import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import EachProfile from './EachProfile';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `https://warehouse-management-server-99fk.onrender.com/profile?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setProfiles(data);
        }
        getItems();
    }, [profiles])
    return (
        <div className='m-3'>
            <h1 className='mt-5 font-bold text-3xl mb-2'>Your Profile</h1>
            {
                profiles.map(profile =>
                    <EachProfile key={profile._id} profile={profile}>
                    </EachProfile>)
            }
        </div>
    );
};

export default MyProfile;