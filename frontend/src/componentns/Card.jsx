import React from 'react';
import { Link } from 'react-router-dom';
import { FcTodoList } from "react-icons/fc";
import axios from 'axios';

export default function Card({ data }) {

  const id = localStorage.getItem('id');
  const sid = data._id;

  const headers = {
    'id' : id,
    'authorization' : `Bearer ${localStorage.getItem('token')}`,
    'sid' : sid
  }

  

 const handleshortList = async () => {
        try {
          const response = await axios.put("https://psg-backend.onrender.com/ShortList",{},{
            headers
           });

           alert(response.data.message);

        } catch (error) {
          alert(error.response.data.message);
        }

 }


  return (
    <div className="cardbody bg-slate-800 flex flex-col md:flex-row p-5 md:p-7 justify-between min-w-full max-w-full md:min-w-[90%] md:max-w-[90%] rounded-lg duration-300 gap-5 md:gap-10 hover:bg-slate-700">
      <div className="flex flex-col gap-2 w-full md:w-[600px]">
        <div className="title text-green-400 font-semibold">{data.title}</div>
        <div className="description text-gray-400 break-words overflow-hidden">
          {data.content}
        </div>
        <div className="category text-sm">
          Category: <span className="text-red-500">{data.category}</span>
        </div>
      </div>
      <div className="buttons flex gap-2 p-5 md:p-7 justify-center items-center">
        <Link to={`/get-statement/${data._id}`}>
          <div className="view-more text-center w-24 md:w-28 text-white p-2 rounded-md duration-300 flex justify-center items-center hover:bg-green-700 bg-green-600">
            View More
          </div>
        </Link>
          <div className="view-more h-16 w-16 md:h-20 md:w-20 text-white p-2 rounded-md duration-300 flex flex-col justify-center items-center">
            <div className="text-3xl bg-slate-900 p-1 rounded-lg hover:text-4xl duration-300">
          <button onClick={handleshortList}><FcTodoList /></button>
            </div>
          </div>
      </div>
    </div>
  );
}
