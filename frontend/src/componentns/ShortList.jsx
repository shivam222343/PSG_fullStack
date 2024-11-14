import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ShortListedCards from './ShortListedCards';

export default function ShortList() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const headers = {
    'id': localStorage.getItem('id'),
  }

  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://psg-backend.onrender.com/get-shortlist',
        { headers }
      );

      setData(result.data);
    };



    fetchData();

  }, []);


  return (
    <div className='min-h-screen w-full bg-slate-800 overflow-x-hidden flex flex-col py-20 justify-center items-center'>
      {
        isLoggedIn === true && <div className="newAdded-statements min-h-96 w-[95vw] md:[85vw] rounded-lg flex flex-col justify-center items-center bg-slate-900">
          <h3 className='tagline text-white font-semibold my-3'>Short Listed Statements</h3>

          {
          Data.length === 0 && <Loader />
        }
          <ul>
            {Data && Data.map((item, index) => (
              <li key={index}>
                <div className=" md:w-auto w-[90vw] cardbody my-3 flex flex-col justify-center items-center text-white ">
                  <ShortListedCards data={item} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      }
      {
        isLoggedIn === false &&
        <div className="newAdded-statements min-h-96 w-[95vw] md:[85vw] rounded-lg flex flex-col justify-center items-center bg-slate-900">
          <h3 className='tagline text-white font-semibold my-3'>For Shortlist a Statements, You have to logIn.</h3>
          <div className="login h-auto w-auto font-semibold flex justify-center items-center rounded-md  p-3 border-2 border-green-300 duration-300 hover:text-green-900 text-green-300 hover:bg-green-300">
            <Link to="/login">Login</Link>
          </div>
        </div>
      }

    </div>
  )
}

