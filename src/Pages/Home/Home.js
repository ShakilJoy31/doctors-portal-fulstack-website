import React from 'react';
import Footer from '../Shered/Footer/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import OurService from './OurService';
import Patients from './Patients';
import StayConnected from './StayConnected';

const Home = () => {
    return (
        <div>
            <div className='w-100 px-12'>
                <Banner></Banner>
                <Info></Info>
                <OurService></OurService>
            </div>
            <div className='background-appointment'>
                <Appointment></Appointment>
            </div>
            <div className='px-12 py-12'>
                <Patients></Patients>
            </div>
            <div className='background-appointment py-12 mt-8'>
            <StayConnected></StayConnected>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;