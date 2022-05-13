import React from 'react';
import Footer from '../Shered/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailavleAppointment from './AvailavleAppointment';
import { useState } from 'react';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div>
                <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
                <AvailavleAppointment date={date}></AvailavleAppointment>
            </div>

            <div className='background-footer'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Appointment;