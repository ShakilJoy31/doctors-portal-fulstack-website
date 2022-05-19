import React from 'react';
import { useQuery } from 'react-query';
import Loading from './../Shered/Loading';
import { useState } from 'react';

const AddDoctors = () => {
    const [service, setService] = useState(''); 
    const{data, isLoading} = useQuery('service',()=>fetch('http://localhost:5000/servicesforadd').then(res => res.json()))
    const hanleServiceButton = event =>{
        console.log(event.target.value); 
        setService(event.target.value); 
    }
    const handleOnSubmitButtonForSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value; 
        const email = event.target.email.value; 
        const specialty = event.target.specialty.value; 
        // const service = event?.target?.service?.value; 
        const image = event.target.image.value; 
        const doctorData = {name, email,specialty, service, image}; 
        console.log(doctorData);
    }

    const imageStorageKey = '94a65109650a1be14f24d43dd19fd874'; 


    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='grid'>
                <div class="card w-96 bg-base-100 shadow-2xl">
                    <h1 className='flex justify-center mt-8 text-4xl text-sky-400'>Add Doctor to DB</h1>
                    <div class="card-body">
                        <form onSubmit={handleOnSubmitButtonForSignUp} action="">
                            <div>
                                <div className='mb-2'>
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text" required name='name' class="input input-bordered input-info w-full max-w-lg"
                                    />
                                </div>

                                <div className='mb-2'>
                                    <label class="label">
                                        <span class="label-text">Your Email</span>
                                    </label>
                                    <input
                                        type="email" required name='email' class="input input-bordered input-info w-full max-w-lg"
                                    />
                                </div>

                                <div>
                                    <label class="label">
                                        <span class="label-text">Specialty</span>
                                    </label>
                                    <input type="text" required name='specialty' class="input input-bordered input-info w-full max-w-lg" />
                                </div>


                                

                                <div className='mt-2'>
                                    <label class="label">
                                        <span class="label-text">Service You want to Provide</span>
                                    </label>
                                    <select
                                     class="select select-accent w-full max-w-xs">
                                   {
                                       data.map(serviceData =>  <option selected>{serviceData.name}</option>)
                                   }         
                                </select>
                                </div>

                                <div>
                                    <label class="label">
                                        <span class="label-text">Upload your photo</span>
                                    </label>
                                    <input type="file" required name='image' class="input input-bordered input-info w-full max-w-lg" />
                                </div>
                                
                                <div className=''>
                                    <input type='submit' value='Add Doctor'
                                        className=
                                        'block w-full mx-auto mt-5 text-3xl text-blue-400 btn btn-outline-primary'
                                    />
                                </div>

                                {/* {
                                    loading ? <button class="btn btn-accent btn-outline mt-5 btn-square loading w-full">Signing up...</button> : 
                                } */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctors;