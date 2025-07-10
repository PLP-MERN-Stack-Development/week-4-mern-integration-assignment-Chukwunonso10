import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login'
import Theme from '@/components/Theme'
import Homepage from './components/pages/Homepage'
import Header from './components/header'
import Footer from './components/Footer'
import AboutPage from './components/pages/AboutPage'
import CategoriesPage from './components/pages/CategoriesPage'


export default function App() {
  return (
  
      
    <BrowserRouter>
    
      <Header />
      <Routes>
        <Route path="/" element={ <Homepage />} />
        <Route path="/signup" element={ <SignUp />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/about" element={ <AboutPage />} />
        <Route path="/categories" element={ <CategoriesPage />} />
        
      </Routes>
      <Footer />
      
    </BrowserRouter>
  )

}