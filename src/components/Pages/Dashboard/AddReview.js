import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://manufacturer-node-server.herokuapp.com/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    toast.success('Ratings Added Successfully')
                }
                else {
                    toast.warn('An Error Occured')
                }
            })
    }
    return (
        <div>
            <h1 className='mt-5 font-bold text-3xl mb-2'>Add A Review</h1>
            <hr />
            <div className='ml-3 mt-5'>
                <form className='grid grid-rows-2 gap-4' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name='name' required {...register("name")}
                        placeholder="Your Name" value={user.displayName} readOnly
                        className="max-w-sm bg-gray-200 rounded-lg input-bordered w-full" />
                    <input {...register("email")}
                        type="number" min='1' max='5' name='rating' required
                        placeholder="Your Rating"
                        className="max-w-sm rounded-lg input-bordered w-full"
                    />
                    <input  {...register("image")}
                        type="text" name='image' required
                        placeholder="Direct Image Link"
                        className="max-w-sm rounded-lg input-bordered w-full"
                    />
                    <textarea cols='4'  {...register("comment")}
                        type="text" name='comment' required
                        placeholder="Your Comment"
                        className="max-w-sm rounded-lg input-bordered w-full"
                    />
                    <div className='text-white'>
                        <button className='pt-3 pb-3 pl-4 pr-4 w-52 rounded-xl bg-yellow-400 hover:bg-yellow-500 mb-5' data-mdb-ripple="true" data-mdb-ripple-color="light">Save Ratings</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;