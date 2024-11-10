import React from 'react';
import Newadded from './Newadded';

export default function Home() {
  return (
    <div className="Home min-h-screen w-full bg-slate-800 overflow-x-hidden flex flex-col pb-20 justify-center items-center">
      <div className="title h-auto flex flex-col justify-center items-center p-20">
      <div className="Headline top-20 md:absolute text-center text-yellow-300 font-bold lg:text-3xl mt-6 text-2xl">Problem Statement Generator</div>
      <div className="tagline md:absolute md:top-20 text-center text-white lg:text-lg text-md mt-16">"The Problem Lab: Generate Statements, Ignite Solutions"</div>
      </div>
     
      <div className="newAdded-statements min-h-96 w-[95vw] md:[85vw] rounded-lg flex flex-col justify-center items-center bg-slate-900">
          <Newadded/>
      </div>
    </div>
  );
}
