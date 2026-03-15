import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../componants/Header'
import Footer from '../componants/Footer'
export default function MainLayout() {
  return (
    <>
      <div className='flex flex-col'>
        <Header/>
      <main>

        <Outlet/>
      </main>
      
        <Footer/>
      </div>

    </>
  )
}
