import React from 'react';
import "./NoScroll.css"
const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-slate-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-3xl font-extrabold text-slate-100">
                    Contact Us
                </h2>
                <p className="text-center text-slate-400">
                    Get in touch with the Problem Statement Generator team!
                </p>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-2">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-700 placeholder-slate-500 text-slate-100 bg-slate-700 rounded-t-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-700 placeholder-slate-500 text-slate-100 bg-slate-700 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="appearance-none body rounded-none relative block w-full px-3 py-2 border border-slate-700 placeholder-slate-500 text-slate-100 bg-slate-700 rounded-b-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-slate-700 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center text-sm text-slate-400">
                    Or reach us at <a href="mailto:contact@psg.com" className="text-slate-300 underline">contact@psg.com</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
