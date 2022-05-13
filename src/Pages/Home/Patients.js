import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'; 

const Patients = () => {
    const patients = <>
        <h2 className='text-2xl text-primary uppercase font-bold'>Testimonial</h2>
        <h3 className='text-4xl'>What Our Patients Say</h3>
    </>
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    {patients}
                </div>

                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-24 px-8'>
            <div class="card w-100 bg-base-100 shadow-2xl">
                <div class="card-body items-center text-center">
                    <p>It is a long established fact that by the readable content of a layout. The point of using Lorem a more or less normal distribu to using Content here, content</p>
                    <div class="flex justify-center items-center mt-3">
                        <img src={people1} alt="" />
                        <div className='ml-3'>
                            <h2>Winson herry</h2>
                            <p>California</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="card w-100 bg-base-100 shadow-2xl">
                <div class="card-body items-center text-center">
                    <p>It is a long established fact that by the readable content of a layout. The point of using Lorem a more or less normal distribu to using Content here, content</p>
                    <div class="flex justify-center items-center mt-3">
                        <img src={people2} alt="" />
                        <div className='ml-3'>
                            <h2>Winson herry</h2>
                            <p>California</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="card w-100 bg-base-100 shadow-2xl">
                <div class="card-body items-center text-center">
                    <p>It is a long established fact that by the readable content of a layout. The point of using Lorem a more or less normal distribu to using Content here, content</p>
                    <div class="flex justify-center items-center mt-3">
                        <img src={people3} alt="" />
                        <div className='ml-3'>
                            <h2>Winson herry</h2>
                            <p>California</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Patients;