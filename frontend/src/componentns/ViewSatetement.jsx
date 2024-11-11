import React from 'react'
import { useParams } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react'
import "./NoScroll.css"

export default function ViewSatetement() {
    const { id } = useParams();
    const [Data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(`http://localhost:3000/get-statement/${id}`);
        setData(result.data);
        console.log(result.data);
      };
     
      fetchData();
        
    }, []);

    const Default = "Data wiil be adding soon...";
  return (
<div className='body min-h-screen w-full bg-slate-800 p-2 md:p-10 py-10 overflow-x-hidden'>
    <div className="box min-h-96 w-[95vw] md:w-[90vw] bg-slate-900 flex flex-col p-7  gap-10 rounded-lg mx-auto">
        <div className="box1 min-h-16 w-full bg-slate-800 rounded-lg p-2">
        <div className="title text-green-400 font-semibold">Statement Title:</div>
        <div className="title text-white font-semibold">{Data.title}</div>
        </div>
        <div className="box2 min-h-20 w-full bg-slate-800 rounded-lg p-2">
        <div className="title text-rose-400 font-semibold">Description:</div>
        <div className="title text-gray-200 ">{Data.content}</div>
        </div>

        <div className="box3 min-h-44 w-full bg-slate-900 flex justify-center items-center gap-10 md:gap-[10%] md:flex-row flex-col rounded-lg p-2">
        <div className="box3 min-h-44 w-full md:w-[45%] bg-slate-800 rounded-lg p-2">
        <div className="title text-rose-400 font-semibold">Solution Approach:</div>
        <div className="title text-gray-200 ">{Data.SolApproach || Default}</div>
        </div>
        
        <div className="box3 min-h-44 w-full md:w-[45%] bg-slate-800 rounded-lg p-2">
        <div className="title text-rose-400 font-semibold">languages/Tech Stack:</div>
        <div className="title text-gray-200 ">{Data.languages}</div>
        </div>
        </div>

        <div className="box4 min-h-44 w-full bg-slate-800 rounded-lg p-2">
        <div className="title text-green-400 font-semibold">Project Video Link: </div>
        <div className="link1 text-white">{Default} link: <button></button></div>
        <div className="link2 text-white">{Default} link: <button></button></div>
        <div className="link3 text-white">{Default} link: <button></button></div>
        <div className="link4 text-white">{Default} link: <button></button></div>
        </div>
    </div>
</div>

  )
}
