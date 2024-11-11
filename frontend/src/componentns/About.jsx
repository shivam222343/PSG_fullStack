import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full space-y-8 bg-slate-800 p-8 rounded-lg shadow-lg">
            
                <h2 className="text-center text-4xl font-extrabold text-slate-100">
                    About Problem Statement Generator
                </h2>
                <p className="text-center text-slate-400">
                    Discover more about our mission, goals, and the motivation behind PSG.
                </p>
                <div className="space-y-4">
                    <p className="text-slate-300 text-lg leading-relaxed">
                        The <span className="font-bold text-slate-200">Problem Statement Generator (PSG)</span> is designed to assist developers, students, and teams in discovering unique and engaging project ideas. Whether you're looking to build your skills in frontend, backend, or full-stack development, PSG provides a wide array of problem statements tailored to specific domains.
                    </p>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Our mission is to inspire innovation and creativity by offering structured, challenging project ideas. Each problem statement is crafted to stimulate learning and development in areas like frontend, backend, blockchain, AI/ML, and mobile app development. PSG also provides solution approaches to help guide users in structuring their projects.
                    </p>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        With PSG, our goal is to bridge the gap between theoretical knowledge and practical implementation, helping users transition smoothly into real-world coding challenges. Join us in making learning both structured and fun!
                    </p>
                </div>
                <div className="text-center mt-8">
                    <h3 className="text-2xl font-bold text-slate-200 mb-2">Meet the Team</h3>
                    <p className="text-slate-400">
                        We are a group of passionate developers and educators dedicated to enhancing learning experiences.
                    </p>
                </div>
                <div className="mt-6 text-center text-sm text-slate-400">
                    Have questions? <a href="/contact" className="text-slate-300 underline">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default About;
