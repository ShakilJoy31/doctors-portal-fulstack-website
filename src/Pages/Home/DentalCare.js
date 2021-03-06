import React from 'react';
import treatment from '../../assets/images/treatment.png'; 

const DentalCare = () => {
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row">
                <img src={treatment} alt='treatment' class="max-w-sm rounded-lg shadow-2xl" />
                <div className='ml-24'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;