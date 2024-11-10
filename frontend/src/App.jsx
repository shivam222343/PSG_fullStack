import React from "react"
import Navbar from "./componentns/Navbar"
import Home from "./componentns/Home"
import Footer from "./componentns/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PSG from "./componentns/PSG"
import ShortList from "./componentns/ShortList"
import AiPrompts from "./componentns/AiPrompts"
import About from "./componentns/About"
import Contact from "./componentns/Contact"


function App() {

  return (
    <>
     <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psg" element={<PSG />} />
        <Route path="/shortlist" element={<ShortList />} />
        <Route path="/ai-prompts" element={<AiPrompts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}


export default App
