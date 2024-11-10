import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const navlinks = [
        { item: "Home", link: "/" },
        { item: "PSG", link: "/psg" },
        { item: "ShortList", link: "/shortlist" },
        { item: "AiPrompts", link: "/ai-prompts" },
        { item: "About", link: "/about" },
        { item: "Contact", link: "/contact" }
    ];

    return (
        <div className="navbar h-16 w-full flex justify-between items-center bg-slate-800">
            <div className="nav-body h-16 w-full flex justify-between items-center border-b-2 px-2 border-yellow-300 rounded-lg bg-slate-800">
                <div className="logo h-14 w-44 justify-center items-center flex gap-2">
                    <div className="logobox h-14 w-14 bg-green-400 rounded-full">

                    </div>
                 <div className="text text-white font-bold "> Problyfy</div>
                </div>

                <div className="items hidden gap-5 md:flex h-16 min-w-96 p-3">
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


                <div className="items hidden md:flex h-16 gap-10  min-w-64 p-3">
                   <div className="login h-auto w-auto font-semibold flex justify-center items-center rounded-md  p-3 border-2 border-green-300 duration-300 hover:text-green-900 text-green-300 hover:bg-green-300">
                     <Link to="/login">Login</Link>
                   </div>

                   <div className="signup h-auto w-auto font-semibold flex justify-center items-center rounded-md  p-3 border-2 border-green-300 duration-300 hover:text-green-900 text-green-300 hover:bg-green-300">
                     <Link to="/signup">SignUp</Link>
                   </div>
                </div>

                <div className="Ai h-16 md:hidden w-16 p-3">
                  
                </div>

                <div className="Menu md:hidden h-16 w-16 p-3">
                 
                </div>
            </div>
        </div>
    );
}
