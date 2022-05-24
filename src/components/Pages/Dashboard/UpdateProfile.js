import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://manufacturer-node-server.herokuapp.com/users/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.result.acknowledged === true) {
                    toast.success('Your profile has been updated')
                }
                else {
                    toast.warn('An Error Occured')
                }
            })
    }

    return (
        <div>
            <h1 className='mt-5 font-bold text-3xl mb-2'>Update Profile</h1>
            <hr />
            <div className='ml-3'>
                <h1 className='text-xl mt-3 mb-3'>Update Your Profile</h1>
                <form className='grid grid-rows-2 gap-4' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name='name' required {...register("name")}
                        placeholder="Your Name" value={user.displayName} readOnly
                        className="max-w-sm bg-gray-200 rounded-lg input-bordered w-full" />
                    <input {...register("email")}
                        type="text" name='email' required readOnly
                        placeholder="Your Email" value={user.email}
                        className="max-w-sm bg-gray-200 rounded-lg input-bordered w-full"
                    />
                    <input  {...register("education")}
                        type="text" name='education' required
                        placeholder="Your Education"
                        className="max-w-sm rounded-lg input-bordered w-full"
                    />
                    <input  {...register("phone")}
                        type="number" name='phone' required
                        placeholder="Your Phone Number"
                        className="max-w-sm rounded-lg input-bordered w-full"
                    />
                    <textarea cols='4'  {...register("address")}
                        type="text" name='address' required
                        placeholder="Your Address"
                        className="max-w-sm rounded-lg input-bordered w-full"
                    />
                    <div className='text-white'>
                        <button className='pt-3 pb-3 pl-4 pr-4 w-52 rounded-xl bg-yellow-400 hover:bg-yellow-500 mb-5' data-mdb-ripple="true" data-mdb-ripple-color="light">Save Profile Details</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;