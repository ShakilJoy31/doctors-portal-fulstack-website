import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <div className='mt-8 mb-8 background-footer'>
            <footer class="footer p-10">
                <div>
                    <span class="footer-title text-xl uppercase">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title  text-xl uppercase">Oral Health</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">CAvity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>
                    <a class="link link-hover">Extra Care for Teeth</a>
                </div>
                <div>
                    <span class="footer-title  text-xl uppercase">Our Address</span>
                    <a class="link link-hover">New York - +101010 Hudson</a>
                    <a class="link link-hover">Emergency Contact +102389239</a>
                    
                </div>
            </footer>
            <h2 className='flex justify-center'>Copyright 2022 All Rights Reserved</h2>
        </div>
    );
};

export default Footer;