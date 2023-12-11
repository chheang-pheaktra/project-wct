import React from 'react';

const Header = () => {
    return (
        <header className="sticky top-0 bg-white shadow">
            <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
                <div class="flex items-center text-2xl">
                    <div class="w-12 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path fill="#BEE3F8" d="M44,7L4,23l40,16l-7-16L44,7z M36,23H17l18-7l1,6V23z"></path>
                            <path fill="#3182CE"
                                d="M40.212,10.669l-5.044,11.529L34.817,23l0.351,0.802l5.044,11.529L9.385,23L40.212,10.669 M44,7L4,23 l40,16l-7-16L44,7L44,7z">
                            </path>
                            <path fill="#3182CE"
                                d="M36,22l-1-6l-18,7l17,7l-2-5l-8-2h12V22z M27.661,21l5.771-2.244L33.806,21H27.661z">
                            </path>
                        </svg>
                    </div>Lander
                </div>
                <div class="flex mt-4 sm:mt-0">
                    <a class="px-4" href="#features">Home</a>
                    <a class="px-4" href="#services">Services</a>
                    <a class="px-4" href="#testimonials">About Us</a>
                </div>
                <div class="hidden md:block">
                    <a class="px-4" href="#">Sign Up</a>
                    <a class="px-4" href="login.jsx">Login</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
