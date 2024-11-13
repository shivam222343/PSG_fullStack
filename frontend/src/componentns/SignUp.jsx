import axios from 'axios';
import React, { useState } from 'react';

const Signup = () => {
   const [Value, setValue] = useState({ username: "", email: "", password: "" });
   
   const change = (e) => {
      const { name, value } = e.target;
      setValue({ ...Value, [name]: value });
   };

   const submit = async (e) => {
      e.preventDefault();
      try {
         if (Value.username === "" || Value.email === "" || Value.password === "") {
            alert("Please fill all the fields");
            return;
         }
         
         const response = await axios.post('https://psg-backend.onrender.com/signup', Value);
         alert(response.data.message);

      } catch (error) {
        alert(error.response.data.error);
      }
   };
   
   return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8 bg-slate-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-center text-3xl font-extrabold text-slate-100">
               Sign Up
            </h2>
            <form className="mt-8 space-y-6" action="#" method="POST">
               <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-2">
                  <div>
                     <label htmlFor="username" className="sr-only">Username</label>
                     <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-700 placeholder-slate-500 text-slate-100 bg-slate-700 rounded-t-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                        placeholder="Username"
                        value={Value.username}
                        onChange={change}
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
                        placeholder="Email"
                        value={Value.email}
                        onChange={change}
                     />
                  </div>
                  <div>
                     <label htmlFor="password" className="sr-only">Password</label>
                     <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-700 placeholder-slate-500 text-slate-100 bg-slate-700 rounded-b-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                        placeholder="Password"
                        value={Value.password}
                        onChange={change}
                     />
                  </div>
               </div>
               <div>
                  <button
                     onClick={submit}
                     type="submit"
                     className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                  >
                     Sign Up
                  </button>
               </div>
            </form>
            <div className="mt-6 text-center text-sm text-slate-400">
               Already have an account? <a href="/login" className="text-slate-300 underline">Log In</a>
            </div>
         </div>
      </div>
   );
};

export default Signup;
