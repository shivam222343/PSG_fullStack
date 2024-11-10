import React from 'react'

export default function Card({title, description, category}) {
  return (
   
    <div className="cardbody bg-slate-800 flex flex-col md:flex-row p-7 rounded-lg cursor-pointer duration-300 gap-10 hover:bg-slate-700">
       <div className='flex flex-col'>
       <div className="title text-green-400 font-semibold">{title}</div>
        <div className="description text-gray-400 ">{description}</div>
        <div className="category">Category: <span className='text-red-500'>{category}</span></div>
       </div>
      
       <div className="buttons md:min-h-14 md:w-28 p-7 ">
           <div className="view-more text-white p-2 rounded-md duration-300 flex justify-center items-center hover:bg-green-700 bg-green-600">
             View More
           </div>
       </div>
    </div>
  )
}

