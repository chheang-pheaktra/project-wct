import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {
    const form=useRef();
    const sendEmail =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_kl50do8','template_h9bne58',form.current,'pHJyBpY2MAUnArn4E')
        .then(res=>{
            alert("Send Succuessfully");
        })
        .catch(Error=>console.log(Error))
    }
    return (
    <section class=" " id="contact">
        <div class="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 ">
            <div class="mb-4">
                <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                    <h2
                        class="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
                    Contact Us
                    </h2>
                </div>
            </div>
            <div class="flex items-stretch justify-center">
                <div class="grid md:grid-cols-2 items-center">
                    <div class=" pr-6">
                    <img src="https://vunetsystems.com/wp-content/uploads/2022/06/Contact-Us-animation.gif" alt="" />
                    </div>
                    <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                        <form id="contactForm mb-6" ref={form} onSubmit={sendEmail}>
                            <div class="mb-6">
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <div class="mx-0 mb-1 sm:mb-4">
                                        <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label>
                                        <input type="email" id="email" autocomplete="email" placeholder="Your email address" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email"/>
                                    </div>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label>
                                    <textarea id="textarea" name="message" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Contact;
