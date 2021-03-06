import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../images/login.svg';
import google from '../../images/google-signin-button.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../hooks/useToken';
import { useForm } from 'react-hook-form';

const Login = () => {
    let errorOccured;
    const [signInWithGoogle, user1, loading2, error2] = useSignInWithGoogle(auth);
    const { register, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || user1);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

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

    const navigateReg = event => {
        navigate('/register');
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex flex-col mt-5 mb-10 items-center md:justify-between md:flex-row md:mb-10 md:mt-0 font-[poppins]'>
            <div className='w-full ml-10'>
                <img width='450px' src={loginImg} alt="" />
            </div>
            <div className='text-black mr-10 mt-10 container w-3/4'>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-rows-4 gap-4'>
                    <h2 className='text-yellow-400 text-center mt-5 text-xl font-medium'>Login Here</h2>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    />
                    <div className='items-center'>
                        <button className='pt-3 pb-3 pl-4 pr-4 w-52 rounded bg-yellow-400 hover:bg-yellow-500 mb-5 text-white' data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
                    </div>
                </form>
                {errorOccured}
                <p className='mt-2'>Or you can login with,</p>
                <div className=''>
                    <button onClick={() => signInWithGoogle()}>
                        <img className='w-52' src={google} alt="" />
                    </button>
                </div>
                <p className='mt-3 mb-1'>New Here? <Link className='text-yellow-400 font-medium' to='/register' onClick={navigateReg}>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;