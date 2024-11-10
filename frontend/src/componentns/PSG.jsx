import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card';
import Loader from './Loader';

export default function PSG() {
 
    const [Data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('http://localhost:3000/All-statements');
        setData(result.data);
        console.log(result.data);
      };
     
      fetchData();
        
    }, []);

  return (
    <div className='min-h-screen w-full bg-slate-800 overflow-x-hidden flex flex-col py-20 justify-center items-center'>
        <div className="newAdded-statements min-h-96 w-[95vw] md:[85vw] rounded-lg flex flex-col justify-center items-center bg-slate-900">
        {!Data && <Loader/> }
        <h3 className='tagline text-white font-semibold my-3'>All Statements</h3>
        <ul>
            {Data && Data.map((item, index) => (
                <li key={index}>
                  <div className=" md:w-auto w-[90vw] cardbody my-3 text-white ">
                  <Card title={item.title} description={item.content} category={item.category}/>
                  </div>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
