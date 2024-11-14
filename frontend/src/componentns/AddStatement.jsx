import React, { useState } from 'react';

export default function AiPrompts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [languages, setLanguages] = useState("");
  const [videoLinks, setVideoLinks] = useState("");
  const [solutionApproach, setSolutionApproach] = useState("");
  const [category, setCategory] = useState("");
  const [jsonInput, setJsonInput] = useState("");

  // Function to update fields based on JSON input
  const handleJsonInputChange = (e) => {
    setJsonInput(e.target.value);

    try {
      const data = JSON.parse(e.target.value);
      setTitle(data.title || "");
      setDescription(data.description || "");
      setLanguages(data.languages || "");
      setVideoLinks(data.videoLinks || "");
      setSolutionApproach(data.solutionApproach || "");
      setCategory(data.category || "");
    } catch (error) {
      console.error("Invalid JSON format");
    }
  };

  const handleSubmit = async (e) => {
    const data = {
        title,
        description,
        languages,
        videoLinks,
        solutionApproach,
        category,
      };

    e.preventDefault();  // Prevent page reload on form submit
    try {
        const response = await axios.post(
            'https://psg-backend.onrender.com/add-statement',
            statement,
            { data }
        );
      alert('Statement added successfully:', response.data);
    } catch (error) {
        console.error('Error adding statement:', error);
    }
};

  

  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center py-20 text-slate-200">
      <h1 className="text-2xl font-bold text-yellow-300">AI Prompt Generator</h1>
      
      <div className="mt-8 w-[90%] lg:w-[60%]">
        <h2 className="text-lg font-bold mb-2">Enter Details Individually:</h2>
        
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-800 text-white p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-800 text-white p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="Languages"
          value={languages}
          onChange={(e) => setLanguages(e.target.value)}
          className="bg-slate-800 text-white p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="Video Links"
          value={videoLinks}
          onChange={(e) => setVideoLinks(e.target.value)}
          className="bg-slate-800 text-white p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="Solution Approach"
          value={solutionApproach}
          onChange={(e) => setSolutionApproach(e.target.value)}
          className="bg-slate-800 text-white p-2 mb-2 rounded"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-slate-800 text-white p-2 mb-2 rounded"
        />
      </div>

      <div className="mt-8 w-[90%] lg:w-[60%]">
        <h2 className="text-lg font-bold mb-2">Or Enter Data in JSON Format:</h2>
        <textarea
          placeholder='{ "title": "", "description": "", "languages": "", "videoLinks": "", "solutionApproach": "", "category": "" }'
          value={jsonInput}
          onChange={handleJsonInputChange}
          className="w-full h-32 bg-slate-800 text-white p-3 rounded"
        ></textarea>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-5 w-40 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700 transition"
      >
        Submit
      </button>
    </div>
  );
}
