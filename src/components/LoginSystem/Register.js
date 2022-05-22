import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import registerImg from '../../images/register.svg';
import google from '../../images/google-signin-button.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
const Register = () => {
    const [agree, setAgree] = useState(false);
    const [ createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // Google Login
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

    let errorOccured;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading || loading2) {
        // Spinner
        return <div className='flex justify-center align-middle'>
            <svg role="status" className="inline mt-52 mb-52 mr-2 w-10 h-10 text-black animate-spin fill-yellow-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
        </div>
    }

    if (error || error2) {
     errorOccured = <p className='text-red-500'>Error: {error?.message}</p>
    }

    if (user || user2) {
        navigate(from, { replace: true });
    }

    const doRegister = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        const {data} = await axios.post('https://manufacturer-node-server.herokuapp.com/login', {email});
        console.log(data);
        localStorage.setItem('accessToken',data.accessToken);
        event.target.reset();
        navigate('/home');
    }

    return (
        <div className='text-black font-[poppins] flex flex-col md:flex-row items-center md:justify-between mb-10'>
            <div className='w-full ml-10 mr-10'>
                <img className='mt-5 ml-8 md:ml-0 md:mt-0 rounded-3xl' width='400px' src={registerImg} alt="" />
            </div>
            <div className='mr-10 w-3/4'>
                <h2 className='text-yellow-400 text-center text-xl font-medium mt-10 mb-5'>Register Here</h2>
                <form onSubmit={doRegister} className='grid grid-rows-4 gap-4'>
                    <input className='p-2 mb-3 border-2 border-gray-400 rounded text-black' type="email" name="email" id="" placeholder='Email Address' required />

                    <input className='p-2 mb-3 border-2 border-gray-400 rounded text-black' type="password" name="password" id="" placeholder='Password' required />
                    <div className='inline mt-4'>
                        <input onClick={() => setAgree(!agree)} className="mr-2" type="checkbox" name="terms" id="terms" />
                        <label className={`${agree ? 'text-green-400' : 'text-red-500'}`}>Accept Our Terms and Conditions</label>
                    </div>
                    <div className='items-center text-white'>
                        <button disabled={!agree} className='pt-3 pb-3 pl-4 pr-4 w-52 rounded bg-yellow-400 hover:bg-yellow-500 mb-5' data-mdb-ripple="true" data-mdb-ripple-color="light">Register</button>
                    </div>
                </form>
                {errorOccured}
                <p>Already have an account? <Link to="/login" className='text-yellow-400 text-decoration-none'>Please Login</Link> </p>
                <p className='mt-2'>Or you can login with,</p>
                <div>
                    <button onClick={() => signInWithGoogle()}
                        className='flex mx-auto mt-3'>
                        <img className='bg-white w-52 rounded' src={google} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;