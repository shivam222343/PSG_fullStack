import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8 border-t-2 border-yellow-300">
      <div className="container mx-auto px-6 lg:px-20 flex flex-wrap justify-between">
        
        {/* Logo and Description */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-2xl font-semibold text-white">PSG Project</h2>
          <p className="mt-2 text-sm">
            Delivering powerful solutions for your projects with expertise and dedication.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-rose-500">Home</a></li>
            <li><a href="/psg" className="hover:text-rose-500">PSG</a></li>
            <li><a href="/shortlist" className="hover:text-rose-500">Shortlist</a></li>
            <li><a href="/ai-prompts" className="hover:text-rose-500">AI Prompts</a></li>
            <li><a href="/about" className="hover:text-rose-500">About</a></li>
            <li><a href="/contact" className="hover:text-rose-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-2 text-sm">Email: contact@psgproject.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>

          <div className="mt-4 flex space-x-4">
            <a href="https://facebook.com" className="hover:text-rose-500" aria-label="Facebook">
              {/* Replace with your icon */}
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-rose-500" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-rose-500" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} PSG Project. All rights reserved.
      </div>
    </footer>
  );
}
