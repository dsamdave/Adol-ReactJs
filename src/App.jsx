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
import ProductDetailsPage from "./pages/Slug/[id]"
import ProfilePage from "./pages/Profile"

const App = () => {


  return (
    <>

    <BrowserRouter>
        <Navbar />

      <Routes>

        <Route exact path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage/>} />

        <Route path="/signup" element={<SignUpPage/>} />

        <Route path="/product/:id" element={<ProductDetailsPage/>} />

        <Route path="/profile" element={<ProfilePage/>} />
        
        
      </Routes>

      <ToastContainer />
    <Footer />
    </BrowserRouter>

    </>
  )
}

export default App