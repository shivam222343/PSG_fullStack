import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card';
import Loader from './Loader';


export default function Newadded() {
    const [Data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('https://psg-backend.onrender.com/recentlyAdded-statements');
        setData(result.data);
      };
     
      fetchData();
        
    }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
        <h3 className='tagline text-white font-semibold my-3'>Newly Added</h3>
        <ul>
          {!Data && <Loader />}
            {Data && Data.map((item, index) => (
                <li key={index}>
                  <div className=" md:w-auto w-[90vw] justify-center items-center flex flex-col cardbody my-3 text-white ">
                  <Card data={item}/>
                  </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
