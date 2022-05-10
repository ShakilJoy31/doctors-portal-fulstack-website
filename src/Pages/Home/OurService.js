import React from 'react';
import floride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitenning from '../../assets/images/whitening.png'
import DentalCare from './DentalCare';

const OurService = () => {
    return (
        <div>
            <div className='flex justify-center mt-6'>
                <div>
                    <p className='text-2xl flex justify-center'>Our Services</p>
                    <h2 className='text-5xl flex justify-center'>Services We Provide</h2>
                </div>
            </div>

            <div className='px-12 mt-4'>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-center gap-6'>
                <div class="card w-100 bg-base-100 shadow-2xl mt-4 p-2">
                    <figure><img src={floride} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title flex justify-center">Fluoride Treatment</h2>
                        <p  className='flex justify-center'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>


                <div class="card w-100 bg-base-100 shadow-2xl mt-4 p-2">
                    <figure><img src={cavity} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title flex justify-center">Cavity Filling</h2>
                        <p  className='flex justify-center'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>


                <div class="card w-100 bg-base-100 shadow-2xl mt-4 p-2">
                    <figure><img src={whitenning} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title flex justify-center">Teeth Whitening</h2>
                        <p  className='flex justify-center'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
            </div>
            <DentalCare></DentalCare>
        </div>
    );
};

export default OurService;