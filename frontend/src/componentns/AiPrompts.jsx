import React, { useState, useCallback, useRef } from 'react';
import { IoPlayBackCircle } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Spline from '@splinetool/react-spline';
import "./NoScroll.css"

export default function AiPrompts() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("Hey! I am always ready to help you...");
  const [fontsize, setFontsize] = useState('xl');
  const [opt, setOpt] = useState("");
  
  const fontSizes = ['sm', 'md', 'lg', 'xl', '2xl', '3xl'];
  const [index, setIndex] = useState(3); // starting from 'xl'

  const decrease = () => {
    if (index > 0) {
      setIndex(index - 1);
      setFontsize(fontSizes[index - 1]);
    }
  };

  const increase = () => {
    if (index < fontSizes.length - 1) {
      setIndex(index + 1);
      setFontsize(fontSizes[index + 1]);
    }
  };

  const enter = () => {
    setQuestion("");
  };

  const generateResponse = async () => {
    setResponse("Loading... (This may take a few seconds)");

    try {
      const res = await axios({
        url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCBQIO3gKfA1KSyE3u-m6HuK7Sohb1N4S4',
        method: 'post',
        data: {
          contents: [{
            parts: [{ text: `${question} ${opt}` }]
          }]
        }
      });
      setResponse(res.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }
  };

  const responseRef = useRef(null);

  const copyToClipboard = useCallback((e) => {
    if (responseRef.current) {
      const text = responseRef.current.textContent;
      navigator.clipboard.writeText(text).then(() => {
        e.target.innerText = "Copied";
        setTimeout(() => {
          e.target.innerText = "Copy";
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy text: ", err);
      });
    }
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center py-20 text-slate-200">
      <div className="relative min-h-[80vh] w-full flex flex-col justify-center items-center">
        <div className=" w-full flex justify-between items-center px-4 py-2">
          <NavLink to="/" className="text-4xl text-white hover:text-yellow-400">
            <IoPlayBackCircle />
          </NavLink>
        </div>
        <h1 className="text-2xl font-bold text-yellow-300">AI Prompt Generator</h1>
        <div className="mt-10 text-center w-[90%] lg:w-[60%]">
          <p className="text-lg">"Unleash your programming potential with CodeCraft, your smart tool for generating code and logic in any language of choice."</p>
          <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">Choose a language:</h2>
            <select
              multiple
              className="body bg-slate-800 border border-yellow-500 rounded-md px-4 py-2 w-full lg:w-[300px] focus:ring-yellow-500 text-yellow-400"
              onChange={(e) => setOpt(e.target.value)}
            >
              {["Javascript", "Html", "Html and Css", "C language", "C++", "Html and Tailwind Css", "Java", "React Js", "Python", "None"].map(lang => (
                <option key={lang} value={lang} className="bg-slate-700 m-2 rounded-lg text-white cursor-pointer hover:bg-slate-900 py-2 px-2">
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-7 items-center w-[80%]">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full px-3 py-2 bg-slate-800 border-2 border-yellow-400 text-white rounded-l-lg"
            type="text"
            placeholder='Enter your text here...'
          />
          <button
            onClick={generateResponse}
            className="mt-3 w-[150px] border-2 border-yellow-400 bg-red-500 text-white rounded-lg font-bold text-xl py-2 hover:bg-red-700 transition-colors"
          >
            Generate
          </button>
        </div>

        <div className="relative mt-8 w-[90%] lg:w-[80%] bg-slate-800 flex-wrap rounded-md p-6">
          <div className="flex gap-5 mb-4">
            <button onClick={decrease} className="bg-yellow-400 px-2 text-slate-950 font-bold">-</button>
            <button onClick={increase} className="bg-yellow-400 px-2 text-slate-950 font-bold">+</button>
          </div>
          <pre ref={responseRef} className={`p-4 text-${fontsize} font-mono overflow-hidden text-wrap text-white`}>
            {response}
          </pre>
          <button onClick={copyToClipboard} className="absolute top-4 right-4 text-yellow-400 font-semibold">Copy</button>
        </div>
      </div>
    </div>
  );
}
