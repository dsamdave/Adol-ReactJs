import { useEffect, useState } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import CardComp from "./components/CardComp"
import Footer from "./components/Footer/Footer"
import HeroComp from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import HomePage from "./pages/HomePage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./components/alert/spinner.css"

const App = () => {


  return (
    <>

    <BrowserRouter>
        <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage/>} />

        <Route path="/signup" element={<SignUpPage/>} />
        
      </Routes>

      <ToastContainer />
    <Footer />
    </BrowserRouter>

    </>
  )
}

export default App