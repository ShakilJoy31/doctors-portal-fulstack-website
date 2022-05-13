import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, time } = treatment;

    const handleOnSubmitForBooking = event =>{
        event.preventDefault(); 
        const bookingDate = date; 
        const slot = event.target.slot.value; 
        const name = event.target.name.value; 
        const phone = event.target.phone.value; 
        const email = event.target.email.value; 
        const userInfo = {bookingDate, slot, name, phone, email};
        fetch('http://localhost:5000/booking', {
            method: 'POST', 
            headers: {
                'content-type':'application/json'
            }, 
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        setTreatment(null); 
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h2 className='text-3xl text-primary'>{name}</h2>

                    <h2 className='p-2 mt-4 text-xl bg-gray-300 rounded-md text'>{format(date, 'PP')}</h2>

                    <form onSubmit={handleOnSubmitForBooking} action="">
                    <select name='slot' class="select select-bordered w-full max-w-lg mt-6 input-secondary">
                        {
                            time.map(slot => <>
                            <option>{slot}</option>
                            </>)
                        }
                    </select>

                    <input type="text" placeholder="Full Name" name='name' required class="input w-full max-w-lg my-6  input-bordered input-secondary" />

                    <input type="text" placeholder="Phone Number" name='phone' required class="input w-full max-w-lg  input-bordered input-secondary" />

                    <input type="email" placeholder="Email" required name='email' class="input w-full max-w-lg my-6  input-bordered input-secondary" />

                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <input type="submit" for="my-modal-6" value='Confirm Booking' className='block w-64 mx-auto text-white btn modal-button btn-secondary' />

                    </form>
                    </div>
                </div>
            </div>
    );
};

export default BookingModal;