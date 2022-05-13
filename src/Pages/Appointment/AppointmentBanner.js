import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { format } from 'date-fns';
import './AppointmentBanner.css'

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row-reverse background-date">
                <img src={chair} class="max-w-lg rounded-lg shadow-2xl" alt='dentist chair' />
                <div>
                    <div className='p-4 mr-8 rounded-lg shadow-2xl'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <p className='text-[#86198f] text-xl'>Your date of Appointment: {format(date, 'PP')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;