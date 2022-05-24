import React from 'react';

const EachProfile = ({profile}) => {
    return (
        <div className='flex flex-col mt-5 ml-5'>
            <h1 className='text-xl'>Profile Id: {profile._id}</h1>
            <h1 className='text-xl'>Your Name: {profile.name}</h1>
            <h1 className='text-xl'>Your Email Address: {profile.email}</h1>
            <h1 className='text-xl'>Your Location: {profile.address}</h1>
            <h1 className='text-xl'>Your Education: {profile.education}</h1>
            <h1 className='text-xl'>Your Phone Number: {profile.phone}</h1>
        </div>
    );
};

export default EachProfile;