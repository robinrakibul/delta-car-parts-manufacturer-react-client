import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const AddProducts = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

// LEFT BUG
    const onSubmit = data => {
        console.log(data);
        const url = 'https://manufacturer-node-server.herokuapp.com/items';
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
            <h2 className='mt-5 font-bold text-3xl mb-2'>Add A Product</h2>
            <hr />
            <div className='ml-3 mt-5'>
                <h1 className='text-xl font-semibold mb-5'>Admin Name: {user.displayName}</h1>
                <form className='grid grid-rows-2 gap-4' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("title")}
                        type="text" name='title' required
                        placeholder="Item Title"
                        className="max-w-sm rounded-lg input-bordered w-full"
                    />
                    <input {...register("price")}
                        type="number" name='price' required
                        placeholder="Item Price"
                        className="max-w-sm rounded-lg input-bordered w-full"
                    />
                    <input  {...register("quantity")}
                        type="number" name='quantity' required
                        placeholder="Item Quantity"
                        className="max-w-sm rounded-lg input-bordered w-full"
                    />
                    <input  {...register("minOrder")}
                        type="number" name='minOrder' required
                        placeholder="Item Minimum Order Amount"
                        className="max-w-sm rounded-lg input-bordered w-full"
                    />
                    <textarea cols='4'  {...register("description")}
                        type="text" name='description' required
                        placeholder="Item Description"
                        className="max-w-sm rounded-lg input-bordered w-full"
                    />
                    {/* <input  {...register("image")}
                        type="file" name='image' required
                        placeholder="Image is required"
                        className="max-w-sm rounded-lg input input-bordered w-full"
                    /> */}
                    <div className='text-white'>
                        <button className='pt-3 pb-3 pl-4 pr-4 w-52 rounded-xl bg-yellow-400 hover:bg-yellow-500 mb-10' data-mdb-ripple="true" data-mdb-ripple-color="light">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;