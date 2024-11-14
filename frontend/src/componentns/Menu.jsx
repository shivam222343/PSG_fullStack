import React from 'react';
import { Link } from 'react-router-dom';



export default function Menu() {
    const navlinks = [
        { item: "Home", link: "/" },
        { item: "PSG", link: "/psg" },
        { item: "ShortList", link: "/shortlist" },
        { item: "AiPrompts", link: "/ai-prompts" },
        { item: "About", link: "/about" },
        { item: "Contact", link: "/contact" }
    ];

    const logout = () => {
      localStorage.setItem('aidata', "I am always ready to help you....!")
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location.reload();
    }
    const isLoggedIn = localStorage.getItem('id')!== null;

  return (
    <div className='menu min-h-screen bg-slate-700 w-full overflow-hidden flex flex-col justify-start py-20 items-center'>
  <div className=' className="p-3 text-4xl text-slate-100 font-extrabold '>Menu</div>
        <div className="items lg:gap-5 flex-col flex h-16 min-w-96 gap-2  p-3">
                    {navlinks.map((navlink, i) => (
                        <Link
                            key={i}
                            to={navlink.link}
                            className="p-3 hover:text-rose-500 duration-300 rounded-lg text-center bg-slate-900 text-slate-100 font-semibold cursor-pointer"
                        >
                            {navlink.item}
                        </Link>
                    ))}
            

                {isLoggedIn === false &&  <div className="items h-16 gap-10  min-w-64 p-3">
                   <div className="login h-auto w-auto font-semibold flex justify-center items-center rounded-md  p-3 border-2 border-green-300 duration-300 hover:text-green-900 text-green-300 hover:bg-green-300">
                     <Link to="/login">Login</Link>
                   </div>

                   <div className="signup h-auto w-auto font-semibold flex justify-center items-center rounded-md  p-3 border-2 border-green-300 duration-300 hover:text-green-900 text-green-300 hover:bg-green-300">
                     <Link to="/signup">SignUp</Link>
                   </div>
                </div>}

                {isLoggedIn === true && <div className="items  h-16 gap-10  min-w-64 p-3">
                   <div className="login h-auto w-auto font-semibold flex justify-center items-center rounded-md  p-3 border-2 border-green-300 duration-300 hover:text-green-900 text-green-300 hover:bg-green-300">
                     <Link to="/profile">Profile</Link>
                   </div>
                   <div className="login h-auto w-auto mt-5 font-semibold flex justify-center items-center rounded-md  p-3 border-2 border-red-400 duration-300 hover:text-red-800 text-red-400 hover:bg-red-400">
                     <Link ><button onClick={logout}>Logout</button></Link>
                   </div>
                </div>}
                </div>

    </div>
  );
}
