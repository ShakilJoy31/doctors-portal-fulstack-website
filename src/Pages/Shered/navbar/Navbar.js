import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from './../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        localStorage.removeItem('accessToken'); 
        signOut(auth); 
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/'>Reviews</Link></li>
        <li><Link to='/'>Contact Us</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
            user &&  <li><Link to='/dashboard'>Dash board</Link></li>
        }

        {
            user?<li><Link onClick={handleSignOut} to='/'>Log out</Link></li>:<li><Link to='/login'>Login</Link></li>
        }
        
    </>
    return (
        <div class="navbar bg-base-100 justify-between">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div class="navbar-center hidden lg:flex d-block ms-auto">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className='navbar-end'>
            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
            </div>
        </div>
    );
};

export default Navbar;