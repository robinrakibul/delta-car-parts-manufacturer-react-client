import React from 'react';
import errorImg from '../../images/404.png';

const ErrorPage = () => {
    return (
        <div className='flex items-center'>
            <img className='mx-auto w-2/4 rounded mt-5 mb-5' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;