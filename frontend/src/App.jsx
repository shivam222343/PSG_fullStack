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
import ViewSatetement from "./componentns/ViewSatetement"
import Login from "./componentns/Login"
import SignUp from "./componentns/SignUp"
import Profile from "./componentns/Profile"
import { useDispatch, useSelector } from'react-redux';
import { authActions } from "./store/auth"
import { useEffect } from "react"
import Menu from "./componentns/Menu"


function App() {

  const dispatch = useDispatch();
  const role = localStorage.getItem('role');
  useEffect(() => {
    if( 
    localStorage.getItem('token') &&
    localStorage.getItem('id') &&
    localStorage.getItem('role')
    ){
      dispatch(authActions.login())
      dispatch(authActions.changeRoll(localStorage.getItem('role') ))
    }
}, [])

  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psg" element={<PSG />} />
        <Route path="/shortlist" element={<ShortList />} />
        <Route path="/ai-prompts" element={<AiPrompts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-statement/:id" element={<ViewSatetement/>} />
      </Routes>
      <Footer/>
     
    </div>
  )
}


export default App
