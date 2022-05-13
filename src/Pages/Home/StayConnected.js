import React from 'react';

const StayConnected = () => {
    return (
        <div className='background-appointment'>
            <div className='flex justify-center items-center mt-8 text-white'>
                <div>
                    <h2 className='text-2xl text-primary text-center'>Contact Us</h2>
                    <h3 className='text-4xl'>Stay Connected With Us</h3>
                </div>
            </div>
            <div className='flex justify-center items-center mt-14'>
                <div>
                    <div class="form-control">
                        <div class="input-group my-8">
                            <input type="text" placeholder="Email Address" class="input" />
                        </div>

                        <div class="input-group">
                            <input type="text" placeholder="Subject" class="input" />
                        </div>

                        <div class="input-group my-8">
                            <textarea name="" id="" cols="30" rows="3" placeholder='Your Message' className=''></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StayConnected;