import React from 'react'
import { FooterCategoryAPI } from '../api/FooterCategoryAPI'
export default function Footer() {
  return (
    <>

    <section className='w-[98%]  m-auto my-10  rounded-lg h-[85vh] myBgColour'>
      <div className='w-11/12 py-2 rounded-lg h-[85vh] myBgColour items-center flex  m-auto '>
      <section className='flex flex-col justify-between'>
       <div className='flex flex-row'>
         <div className='w-1/3 px-6 '>
         <div className='flex items-center -pl-8 pb-6'>
    <img src="./image/logo.png" alt=""
    className='w-[50px]' />
    <p className='text-xl font-semibold'>Book Store</p>

    </div>
          <p className='text-xs my-2'>Crossword Bookstore draws book lovers of all ages into a community where they can discover great books, engage with booklovers and meet their favourite literary personalities.</p>
          <p className='my-4'>estore@crossword.in</p>
          <p>+91 85302 06759</p>
        </div>

<section className='flex gap-4 items-center flex-col md:flex-row w-full justify-around'>

          <div className='border'>
          <h1 className='font-semibold text-xl mb-2'>Quick Links</h1>
          <ul className='text-sm font-semibold  w-auto gap-1 flex-col flex'>
            <li className='  relative myTextColor  decoration-none  after:absolute  after:left-0 after:-bottom-2 after:w-[50%] after:h-[2px] after:bg-black after:origin-left after:scale-x-0 after:duration-300 after:ease-in-out hover:after:scale-x-100 '>Contact</li>
            <li  className='  relative myTextColor  decoration-none  after:absolute  after:left-0 after:-bottom-2 after:w-[100%] after:h-[2px] after:bg-black after:origin-left after:scale-x-0 after:duration-300 after:ease-in-out hover:after:scale-x-100 '>Complain</li>
            <li>Track Order</li>
            <li>Dashboard</li>
            <li>About us</li>
            <li>Feedback</li>
          </ul>
        </div>
          <div className='border'>
          <h1 className='font-semibold text-xl mb-2'>Quick Links</h1>
          <ul className='text-sm font-semibold gap-1 flex-col flex'>
            <li>Contact</li>
            <li>Complain</li>
            <li>Track Order</li>
            <li>Dashboard</li>
            <li>About us</li>
            <li>Feedback</li>
          </ul>
        </div>
          <div className='border'>
          <h1 className='font-semibold text-xl mb-2'>Quick Links</h1>
          <ul className='text-sm font-semibold gap-1 flex-col flex'>
            <li>Contact</li>
            <li>Complain</li>
            <li>Track Order</li>
            <li>Dashboard</li>
            <li>About us</li>
            <li>Feedback</li>
          </ul>
        </div>
          <div className='border'>
          <h1 className='font-semibold text-xl mb-2'>Quick Links</h1>
          <ul className='text-sm font-semibold gap-1 flex-col flex'>
            <li>Contact</li>
            <li>Complain</li>
            <li>Track Order</li>
            <li>Dashboard</li>
            <li>About us</li>
            <li>Feedback</li>
          </ul>
        </div>
</section>
       </div>

        <div>
          <h1 className='text-xl my-5 font-semibold '>Popular Searches</h1>
          <ul className='flex w-full gap-2 flex-wrap'>
{
  FooterCategoryAPI.map((item, index)=> {
    return <>
    <li className='border-[1px] cursor-pointer hover:scale-105 ease-in-out duration-200 border-black rounded text-[13px] font-semibold py-1 px-2 '>
      {item.navItem}
    </li>

    </>
  })
}
          </ul>

          <div className='flex text-xs mt-4 font-semibold justify-between'>
            <p>© 2026 Book Store, All Rights Reserved.</p>
            <ul className='flex flex-row gap-2'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>LinkedIn</li>
            </ul>

          </div>
        </div>
    

      </section>
      </div>
    </section>
    </>
  )
}
