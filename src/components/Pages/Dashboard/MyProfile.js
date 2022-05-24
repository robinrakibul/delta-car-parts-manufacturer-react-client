import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='m-3'>
            <h1 className='text-xl mb-2'>Your Name: {user.displayName}</h1>
            <h1 className='text-xl'>Your Email: {user.email}</h1>
        </div>
    );
};

export default MyProfile;