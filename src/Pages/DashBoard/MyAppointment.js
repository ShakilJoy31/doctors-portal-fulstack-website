import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shered/Loading';


const MyAppointment = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
                method: 'GET', 
                headers: {
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res =>{
                    if(res.status === 401 || res.status === 403){
                        signOut(auth); 
                        localStorage.removeItem('accessToken'); 
                        navigate('/'); 
                    }
                    return res.json()
                })
                .then(data => setBookings(data))
        }
    }, [user])

    const navigate = useNavigate(); 
    const sendToAppointment = () =>{
        navigate('/appointment'); 
    }

    console.log(bookings); 

    const handleDeleteThisSlot = (id) =>{
        fetch(`http://localhost:5000/deleteSlot/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           const restBooking =  bookings.filter(deleteBooking => deleteBooking._id !== id); 
           setBookings(restBooking); 
        })
   }

   
    if(bookings?.length === 0){
        return <div>
            <h1 className='flex items-center justify-center mt-6 text-2xl text-red-400'>We stand here to provide you a better treatment. <br></br> Before you have some treatment, book your slot first. </h1>
            <Loading></Loading>
            <h1 className='flex items-center justify-center mt-6 text-3xl text-green-400'>Waiting for your booking....</h1>
            <button onClick={sendToAppointment} class="btn block mx-auto btn-purple btn-outline mt-6 text-purple-400 w-64">Take me o the Appointment corner</button>
        </div>
    }

    

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th className='text-purple-500'>No.</th>
                            <th className='text-purple-500'>Treatment</th>
                            <th className='text-purple-500'>Date</th>
                            <th className='text-purple-500'>Time</th>
                            <th className='text-purple-500'>Email</th>
                            <th className='text-purple-500'>Action</th>
                        </tr>
                    </thead>
                    {
                        bookings.map((singleBooking, index) => <tbody>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{singleBooking?.name}</td>
                                <td>{singleBooking?.bookingDate}</td>
                                <td>{singleBooking?.slot}</td>
                                <td>{singleBooking.email}</td>
                                <td><button onClick={()=>handleDeleteThisSlot(singleBooking._id)} class="btn btn-purple btn-outline mt-6 text-purple-400 w-48">Cancel Appointment</button></td>
                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;