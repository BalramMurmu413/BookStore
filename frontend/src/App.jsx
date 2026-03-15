import { useState } from 'react'
import {Routes, Route } from "react-router-dom";


import Home from './pages/Home'
import MainLayout from './Layout/MainLayout'
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
   
      <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
