import React from 'react';
import Banner from './Banner';
import Info from './Info';
import OurService from './OurService';

const Home = () => {
    return (
        <div className='w-100'>
            <Banner></Banner>  
            <Info></Info>
            <OurService></OurService>
        </div>
    );
};

export default Home;