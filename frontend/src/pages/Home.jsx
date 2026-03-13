import React from 'react'
import Header from '../componants.jsx/Header'
import Footer from '../componants.jsx/Footer'
import Banner from '../componants.jsx/Banner'
import Card from '../componants.jsx/Card'
import ProductCard from '../componants.jsx/ProductCard'

export default function Home() {
  return (
    <>
    <div className='w-full h-screen'>
      <Header/>
      <Banner/>
      <Card/>
      <ProductCard/>

      <Footer/>
    </div>
    </>
  )
}
