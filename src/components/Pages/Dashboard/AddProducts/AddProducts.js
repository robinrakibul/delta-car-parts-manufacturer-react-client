import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const AddProducts = () => {
    const imageStorageKey = '668407857fb1966c7d9cc54e72e02724';

    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const urlImage = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(urlImage, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const item = {
                        title: data.title,
                        price: data.price,
                        quantity: data.quantity,
                        minOrder: data.minOrder,
                        description: data.description,
                        image: img
                    }
                    //send to db
                    fetch('http://localhost:5000/items', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(item)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.acknowledged === true) {
                                toast.success('Product Added Successfully')
                            }
                            else {
                                toast.warn('An Error Occured')
                            }
                        })
                }
                console.log('ImgBB Result', result);
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
                    <input  {...register("image")}
                        type="file" name='image' required
                        placeholder="Image is required"
                        className="max-w-sm rounded-xl input input-bordered w-full"
                    />
                    <div className='text-white'>
                        <button className='pt-3 pb-3 pl-4 pr-4 w-52 rounded-xl bg-yellow-400 hover:bg-yellow-500 mb-10' data-mdb-ripple="true" data-mdb-ripple-color="light">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;