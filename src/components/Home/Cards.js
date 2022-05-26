import React from 'react';
import headlights from '../../images/headlights.jpg';
import interior from '../../images/interior.jpg';
import carwheels from '../../images/car-wheels.jpg';
const Cards = () => {
    return (
        <div className='grid mt-5 mb-5 ml-10 mr-10 md:ml-5 md:mr-0 gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="card w-96 glass">
                <figure><img src={headlights} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title font-light">Cheap Cost</h2>
                    <p className='font-bold text-3xl'>We have all the parts in cheap rate</p>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure><img src={interior} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title font-light">Fresh Material</h2>
                    <p className='font-bold text-3xl'>Fresh materials for interior</p>
                </div>
            </div>
            <div className="card w-96 glass">
                <figure><img src={carwheels} alt="car!"/></figure>
                <div className="card-body font-light">
                    <h2 className="card-title">Latest Items</h2>
                    <p className='font-bold text-3xl'>Latest model items available</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;