import React from 'react';
import doctorSmile from '../../assets/images/doctor-small.png'; 
import appointment from '../../assets/images/appointment.png'; 
import './Appointment.css'; 

const Appointment = () => {
    return (
        <div className='mb-8 mt-24 text-white'>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={doctorSmile} class="max-w-sm mt-[-100px] hidden lg:block" />
                    <div className='ml-24'>
                        <h2 className='text-2xl text-primary'>Appointment</h2>
                        <h1 class="text-5xl font-bold">Make an Appointment Today</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;