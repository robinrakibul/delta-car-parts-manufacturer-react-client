import React from 'react';

const EachProfile = ({profile}) => {
    return (
        <div className='flex flex-col mt-5 ml-5'>
            <h1 className='text-xl'>Profile Id: {profile._id? profile._id : 'Not Available'}</h1>
            <h1 className='text-xl'>Your Name: {profile.name? profile.name : 'Not Available'}</h1>
            <h1 className='text-xl'>Your Email Address: {profile.email? profile.email : 'Not Available'}</h1>
            <h1 className='text-xl'>Your Location: {profile.address? profile.address : 'Not Available'}</h1>
            <h1 className='text-xl'>Your Education: {profile.education? profile.education : 'Not Available'}</h1>
            <h1 className='text-xl'>Your Phone Number: {profile.phone? profile.phone : 'Not Available'}</h1>
        </div>
    );
};

export default EachProfile;