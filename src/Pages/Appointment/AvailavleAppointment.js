import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import BookingModal from './BookingModal';

const AvailavleAppointment = ({ date }) => {
    const [service, setService] = useState([]); 
    const [treatment, setTreatment] = useState(null); 
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <div className='flex justify-center mt-24 text-2xl text-primary'>
                <h2>Available Appointment on {format(date, 'PP')}</h2>
            </div>


            <div className='grid grid-cols-1 gap-4 px-12 mt-12 md:grid-cols-2 lg:grid-cols-3'>
                {
                    service.map(singleAppointment => <div class="card w-100 bg-base-100 shadow-2xl">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title text-primary">{singleAppointment.name}</h2>
                            <p>{
                                singleAppointment.time.length > 0 ?
                                    <span>{singleAppointment.time[0]}</span>
                                    : <span className='text-red-500'>No slot available.
                                        Try Another day</span>}</p>
                            <p>{singleAppointment.time.length} {singleAppointment.time.length > 1 ? <span>Spaces</span> : <span>Space</span>} Available</p>
                            <div class="card-actions">
                                <label
                                onClick={()=>{setTreatment(singleAppointment)}} disabled={singleAppointment.time.length < 1}
                                 for="my-modal-6" class="btn modal-button btn-secondary w-64 text-white">Book Appointment</label>
                            </div>
                        </div>
                    </div>)
                }

                {
                    treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}></BookingModal>
                }
            </div>

        </div>
    );
};

export default AvailavleAppointment;