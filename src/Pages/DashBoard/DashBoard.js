import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useState } from 'react';


const DashBoard = () => {
    const [admin, setAdmin] = useState(null); 
    const [user, loading] = useAuthState(auth); 
    useEffect(()=>{
        fetch(`http://localhost:5000/admin/${user?.email}`)
        .then(res =>{
            if(res?.status !== 403){
                setAdmin(res); 
                return res.json(); 
            }
        })
        .then(data => {
            console.log(data); 
        })
    },[])
    
    console.log(admin?.status); 

    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-bold text-purple-500 '>Welcome to your dash board! </h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/myreview'>My Review</Link></li>
                    {
                        admin?.status === 200? <>
                        <li><Link to='/dashboard/alluser'>All User</Link></li>

                        <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                        </>  : '' 
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;