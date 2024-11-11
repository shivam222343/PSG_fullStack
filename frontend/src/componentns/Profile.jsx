import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Profile = () => {
    //   const isLoggedIn = useSelector()
      const headers = {
        id : localStorage.getItem('id'),
        authorization : `Bearer ${localStorage.getItem('token')}`
      }

      const [Data, setData] = useState("")
      
    useEffect(() => {
      const fetchData = async () => {
          const response = await axios.get('http://localhost:3000/register',{headers});
          setData(response.data);
          console.log(response.data);
          
     }
       fetchData();
       
    }, []);


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
                  <h3 className="text-lg font-semibold text-gray-300">Role</h3>
                  <p className="text-gray-400">{Data.role}</p>
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

