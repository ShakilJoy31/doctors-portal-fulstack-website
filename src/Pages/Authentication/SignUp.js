import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const handleOnSubmitButtonForSignUp = event =>{
        event.preventDefault(); 
        const email = event.target.email.value; 
        const password = event.target.password.value; 
        const confirmPassword = event.target.confirmPassword.value;
        if(password === confirmPassword){
            createUserWithEmailAndPassword(email, password); 
        }
    }

    const handleSignInWithGoogle = () =>{
        signInWithGoogle(); 
    }

    const handleSignInWithGithub = () =>{
        signInWithGithub(); 
    }

    const [generalUser] = useAuthState(auth);

    const navigate = useNavigate();
    const handleSentToLogIn = () => {
        navigate('/login')
    }

    if(generalUser){
        toast('Authentication Verified'); 
    }


    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='grid'>
                <div class="card w-96 bg-base-100 shadow-2xl">
                    <h1 className='flex justify-center mt-8 text-4xl text-sky-400'>Sign up</h1>
                    <div class="card-body">
                        <form onSubmit={handleOnSubmitButtonForSignUp}  action="">
                            <div>
                                <div className='mb-2'>
                                    <label class="label">
                                        <span class="label-text">Your Email</span>
                                    </label>
                                    <input
                                     type="text" required name='email' class="input input-bordered input-info w-full max-w-lg"
                                      />
                                </div>

                                <div>
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password" required name='password' class="input input-bordered input-info w-full max-w-lg" />
                                </div>


                                <div className='mt-2'>
                                    <label class="label">
                                        <span class="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" required name='confirmPassword' class="input input-bordered input-info w-full max-w-lg" />
                                </div>

                                {
                                    loading?<button class="btn btn-accent btn-outline mt-5 btn-square loading w-full">Signing up...</button>:<div className='block max-w-lg mx-auto mt-5 btn btn-accent'>
                                    <input type='submit' value='Sign up'
                                    className='block mx-auto text-3xl text-blue-400'
                                     />
                                </div>
                                }
                                
                                

                                {
                                    error?<p className='mt-4 mb-4 text-red-700'>{error.message}</p>:''  
                                }


                                

                                <label class="label flex justify-center">
                                    <span class="label-text text-xl">Already have an account? <span onClick={handleSentToLogIn} className='text-2xl text-red-400'>Log in</span> </span>
                                </label>

                                <div class="divider text-sky-400">OR</div>


                                {
                                    googleLoading?<button class="btn btn-accent btn-outline btn-square loading w-full">Signing up with google...</button>:<div className='block max-w-lg mx-auto mt-3 btn btn-accent btn-outline'> <button
                                    onClick={handleSignInWithGoogle}
                                     className='block mx-auto mt-2 text-2xl text-blue-400'>Continue With Google</button>
                                </div>
                                }

                                {
                                    googleError?<p className='mt-4 mb-4 text-red-700'>{googleError.message}</p>:''
                                }
                                
                                
                                {
                                    githubLoading ?<button class="btn btn-accent btn-outline mt-6 btn-square loading w-full">Signing up with github...</button>:<div className='block max-w-lg mx-auto mt-6 btn btn-accent btn-outline'>
                                    <button onClick={handleSignInWithGithub} className='block mx-auto mt-2 text-2xl text-blue-400'>Continue With Github</button>
                                </div>
                                }

{
                                    githubError?<p className='mt-4 mb-4 text-red-700'>{githubError.message}</p>:''
                                }


                                <div className='block max-w-lg mx-auto mt-6 btn btn-accent btn-outline'>
                                    <button className='block mx-auto mt-2 text-2xl text-blue-400'>Continue With Facebook</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;