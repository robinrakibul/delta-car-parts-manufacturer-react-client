import React from 'react';

const SingleReviews = ({ review }) => {
    const { name, rating, comment, image } = review;
    return (
            <div className="card w-80 md:w-96 lg:w-96 bg-base-100 border-2 shadow-xl">
                <figure><img src={image} className="rounded-full mt-5" alt="" /></figure>
                <div className="card-body">
                    <p>{name}</p>
                    <h2 className="card-title">
                    <p>Ratings: {rating} <input type="radio" name="rating-4" disabled className="mask mask-star-2 bg-green-500" /></p>
                    <div className="badge rounded-lg badge-accent">Buyer Comment</div>
                    </h2>
                    <p>{comment}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Car Parts</div>
                    </div>
                </div>
            </div>
    );
};

export default SingleReviews;