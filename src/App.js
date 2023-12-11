import React from 'react'
import './app.css'
import Home from './Components/Home/Home' 
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

export default function App(){
    return (
       <>
       <Navbar />
       <Home />
       <Main />
       <Footer />
       
       
       </>
    )
}