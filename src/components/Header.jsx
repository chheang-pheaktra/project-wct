import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.jpg'
const Header = () => {
    return (
        <header className="sticky top-0 bg-white shadow">
            <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
                <Link to="/">
                    <div class="flex items-center text-2xl">
                        <div class="w-12 mr-3">
                            <img src={Logo} className="rounded-full" />
                        </div>RESCAM
                    </div>
                </Link>
                <div class="flex mt-4 sm:mt-0">
                    <Link to="/" class="px-4">Home</Link>
                    <Link to="/Service" class="px-4" >Services</Link>
                    <Link to="/About" class="px-4">About Us</Link>
                </div>
                <div class="hidden md:block">
                    <Link to="/signup" class="px-4">Sign Up</Link>
                    <Link to="/login" class="px-4" >Login</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
