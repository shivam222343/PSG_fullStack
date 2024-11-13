import React from 'react';
import { Link } from 'react-router-dom';
import img from "./1.png";
import { useSelector } from 'react-redux';
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
    const navlinks = [
        { item: "Home", link: "/" },
        { item: "PSG", link: "/psg" },
        { item: "ShortList", link: "/shortlist" },
        { item: "AiPrompts", link: "/ai-prompts" },
        { item: "About", link: "/about" },
        { item: "Contact", link: "/contact" }
    ];

    const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
   
    if(isLoggedIn === false)
    {
        navlinks.splice(1,3)
    }

    //logout
    const logout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        window.location.reload();
    }

    return (
        <div className="navbar h-16 w-full flex justify-between items-center bg-slate-800">
            <div className="nav-body h-16 w-full flex justify-between items-center border-b-2 px-2 border-yellow-300 rounded-lg bg-slate-800">
                <div className="logo h-14 w-44 justify-center items-center flex gap-2">
                    <div className="logobox overflow-hidden h-14 w-14 bg-green-400 rounded-full">
                     <img src={img} alt="" />
                    </div>
                 <div className="text text-2xl text-white font-bold "> Problyfy</div>
                </div>

                <div className="items hidden lg:gap-5 md:flex h-16 min-w-96 gap-2 p-3">
                    {navlinks.map((navlink, i) => (
                        <Link
                            key={i}
                            to={navlink.link}
                            className="p-3 hover:text-rose-500 duration-300 text-slate-100 font-semibold cursor-pointer"
                        >
                            {navlink.item}
                        </Link>
                    ))}
                </div>


               {isLoggedIn === false &&  <div className="items hidden lg:flex h-16 gap-10  min-w-64 p-3">
                   <div className="login h-auto w-auto font-semibold flex justify-center items-center rounded-md  p-3 border-2 border-green-300 duration-300 hover:text-green-900 text-green-300 hover:bg-green-300">
                     <Link to="/login">Login</Link>
                   </div>

                   <div className="signup h-auto w-auto font-semibold flex justify-center items-center rounded-md  p-3 border-2 border-green-300 duration-300 hover:text-green-900 text-green-300 hover:bg-green-300">
                     <Link to="/signup">SignUp</Link>
                   </div>
                </div>}

                {isLoggedIn === true && <div className="items hidden lg:flex h-16 gap-10  min-w-64 p-3">
                   <div className="login h-auto w-auto font-semibold flex justify-center items-center rounded-md  p-3 border-2 border-green-300 duration-300 hover:text-green-900 text-green-300 hover:bg-green-300">
                     <Link to="/profile">Profile</Link>
                   </div>
                   <div className="login h-auto w-auto font-semibold flex justify-center items-center rounded-md  p-3 border-2 border-red-400 duration-300 hover:text-red-800 text-red-400 hover:bg-red-400">
                     <Link ><button onClick={logout}>Logout</button></Link>
                   </div>
                </div>}
                

                <div className="Ai h-16 md:hidden w-16 p-3">
                  
                </div>

                <div className="Menu lg:hidden cursor-pointer text-white text-4xl h-16 w-16 p-3">
                <Link to="/menu"> < HiMenuAlt3/></Link>
                </div>
            </div>
        </div>
    );
}
