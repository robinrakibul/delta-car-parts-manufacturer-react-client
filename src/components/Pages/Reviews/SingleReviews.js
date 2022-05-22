import React from 'react';

const SingleReviews = ({ review }) => {
    const { name, rating, comment, image } = review;
    return (
            <div class="card w-96 bg-base-100 border-2 shadow-xl">
                <figure><img src={review.image} className="rounded-full mt-5" alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    <p>Ratings: {review.rating} <input type="radio" name="rating-4" disabled class="mask mask-star-2 bg-green-500" /></p>
                    <div class="badge rounded-lg badge-accent">Buyer Comment</div>
                    </h2>
                    <p>{review.comment}</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Car Parts</div>
                    </div>
                </div>
            </div>
    );
};

export default SingleReviews;