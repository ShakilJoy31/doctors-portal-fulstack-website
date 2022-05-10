import React from 'react';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-16 text-white'>
            <div class="card lg:card-side bg-base-100 shadow-xl bg-primary bg-gradient-to-r from-secondary primary p-3">
                <figure><img src={clock} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>   
                </div>
            </div>


            <div class="card lg:card-side bg-base-100 shadow-xl bg-accent p-3">
                <figure><img src={location} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Visit Our Location</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>


            <div class="card lg:card-side bg-base-100 shadow-xl bg-primary bg-gradient-to-r from-secondary primary p-3">
                <figure><img src={phone} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Contact Us</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default Info;