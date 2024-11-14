import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from'react-router-dom';

const Profile = () => {
    //   const isLoggedIn = useSelector()
      const headers = {
        id : localStorage.getItem('id'),
        authorization : `Bearer ${localStorage.getItem('token')}`
      }

      const [Data, setData] = useState("")
      
    useEffect(() => {
      const fetchData = async () => {
          const response = await axios.get('https://psg-backend.onrender.com/register',{headers});
          setData(response.data);
          console.log(response.data);
          
     }
       fetchData();
       
    }, []);

    const isAdmin = localStorage.getItem('role') === 'admin';
    const isLoggedIn = localStorage.getItem('token')!== null;

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-center text-3xl font-extrabold text-gray-100">
               Profile
            </h2>
            <div className="mt-8 space-y-4">
               <div>
                  <h3 className="text-lg font-semibold text-gray-300">Username</h3>
                  <p className="text-gray-400">{Data.username}</p>
               </div>
               <div>
                  <h3 className="text-lg font-semibold text-gray-300">Email</h3>
                  <p className="text-gray-400">{Data.email}</p>
               </div>
               <div>
                  <h3 className="text-lg font-semibold text-gray-300 flex flex-row gap-20">Role</h3>
                  <p className="text-gray-400">{Data.role}</p> 
                  {
                  isAdmin == true && isLoggedIn == true &&  <p className="text-gray-400">
                     <div className="login h-auto w-auto font-semibold flex justify-center max-w-44 items-center rounded-md  p-3 border-2 border-green-300 duration-300 hover:text-green-900 text-green-300 hover:bg-green-300">
                     <Link to="/add-statement">Add Statements</Link>
                   </div>
                  </p>
                 }
               </div>
               <div>
                  <h3 className="text-lg font-semibold text-gray-300">Acount created at</h3>
                  <p className="text-gray-400">{Data.createdAt}</p>
               </div>
               <div className="mt-6">
                  <button className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                     Edit Profile
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;

