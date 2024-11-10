import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card';
import Loader from './Loader';


export default function Newadded() {
    const [Data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('http://localhost:3000/recentlyAdded-statements');
        setData(result.data);
        console.log(result.data);
      };
     
      fetchData();
        
    }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
        <h3 className='tagline text-white font-semibold my-3'>Newly Aded</h3>
        <ul>
          {!Data && <Loader />}
        
            {Data && Data.map((item, index) => (
                <li key={index}>
                  <div className=" md:w-auto w-[90vw] cardbody my-3 text-white ">
                  <Card title={item.title} description={item.content} category={item.category}/>
                  </div>
                </li>
            ))}
        </ul>

      {/* Add more components as needed */}
    </div>
  )
}
