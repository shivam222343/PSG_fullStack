import axios from 'axios';
import React, { useState } from 'react';
import { authActions } from '../store/auth';
import { useNavigate } from 'react-router';
import { useDispatch } from'react-redux';
const Login = () => {
    const [Value, setValue] = useState({ username: "", password: "" });
   
   const change = (e) => {
      const { name, value } = e.target;
      setValue({ ...Value, [name]: value });
   };

   const navigate = useNavigate()
const dispatch = useDispatch();
   const submit = async (e) => {
      e.preventDefault();
      try {
         if (Value.username === "" || Value.password === "") {
            alert("Please fill all the fields");
            return;
         }
         
         const response = await axios.post('http://localhost:3000/login', Value);

         dispatch(authActions.login());
         dispatch(authActions.changeRoll(response.data.role));
         localStorage.setItem('token', response.data.token);
         localStorage.setItem('id', response.data.userId);
         localStorage.setItem('role', response.data.role);
         navigate('/');

         alert(response.data.message);
      } catch (error) {
        alert(error.response.data.error);
      }
   };
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-slate-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-center text-3xl font-extrabold text-slate-100">
                    Log In
                </h2>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm-space-y-px flex flex-col gap-2">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-700 placeholder-slate-500 text-slate-100 bg-slate-700 rounded-t-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                                placeholder="Username"
                                name = "username"
                                onChange = {change}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-700 placeholder-slate-500 text-slate-100 bg-slate-700 rounded-b-md focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                                placeholder="Password"
                                name = "password"
                                onChange = {change}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                        onClick={submit}
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                        >
                            Log In
                        </button>
                    </div>
                </form>
                <div className="mt-6 text-center text-sm text-slate-400">
                    Don’t have an account? <a href="/signup" className="text-slate-300 underline">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
