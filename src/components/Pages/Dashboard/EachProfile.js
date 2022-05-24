import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const EachProfile = (EachProfile) => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1 className='text-xl mb-2'>Your Name: {user.displayName}</h1>
            <h1 className='text-xl'>Your Email: {user.email}</h1>
            <h1 className='text-xl'>Your Email: {EachProfile.email}</h1>
        </div>
    );
};

export default EachProfile;