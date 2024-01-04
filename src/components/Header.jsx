import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg'
import Auth from './Auth';

const Header = () => {
    return (
        <header className="sticky top-0 bg-white shadow text-blue-600">
            <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
                <Link to="/">
                    <div class="flex items-center text-2xl">
                        <div class="w-16 mr-3">
                            <img src={Logo} className="rounded-full" />
                        </div>RESCAM
                    </div>
                </Link>
                <div class="flex mt-4 sm:mt-0 font-medium">
                    <Link to="/" class="px-4">Home</Link>
                    <Link to="/Contact" class="px-4" >Contact Us</Link>
                    <Link to="/About" class="px-4">About Us</Link>
                </div>
                <div class="hidden md:block">
                   <Auth/>
                </div>
            </div>
        </header>
    );
}

export default Header;
