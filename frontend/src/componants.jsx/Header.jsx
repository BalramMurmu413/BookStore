import React, { useState } from 'react'

import navList from '../api/navApi'
import Offer from '../api/Offer';

import { IoMdSearch } from 'react-icons/io';
import { CiShoppingCart } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { FiUser } from "react-icons/fi";




export default function Header() {
 const [isLogin, setIsLogin] = useState(true)

  return (
      
    <>

<div className='flex items-center justify-center text-xs font-semibold my-1'>
    {
        Offer.map((item, index)=> {
            return (
                <>
                <p>{item.description}</p>
                <p>{item.icon}</p>
                </>
            )
        })
    }
</div>
    <section className='w-full min-h-[60px] flex flex-col items-center myBgColour sticky top-0  poppins-light'>

   <div className='flex lg:hidden justify-between w-full min-h-[60px] items-center mx-6'>
    <div>
            <img src="./image/logo.png" alt="logo image" 
            className='w-[90px]' />
    </div>

    <div className='text-xl  font-light flex gap-10'>
            <CiShoppingCart className='text-2xl font-semibold'/>
            <CiGift className='text-2xl font-semibold'/>
            { 
            (isLogin) 
            
            ?
            <FiUser className='text-2xl font-semibold'/>
            :
            ''
            }
   </div>
</div>





    <div className='w-11/12 m-auto hidden lg:flex items-center justify-between   '>
        <div>
            <img src="./image/logo.png" alt="logo image" 
            className='w-[90px]' />
        </div>
        <div>

        <nav className='flex flex-row w-full gap-10 myTextColor cursor-pointer text-xs font-semibold '>
            {
                navList.map((item, index)=>{
                    return <ul  className=' '>
                        <li
                        className='  relative myTextColor  decoration-none after:absolute  after:left-0 after:-bottom-2 after:w-[100%] after:h-[2px] after:bg-black after:origin-left after:scale-x-0 after:duration-300 after:ease-in-out hover:after:scale-x-100  ' 
                        key={index}>{item.title} </li>
                    </ul>
                })
            }
        </nav>

        </div>

        <div className='relative'>
            <IoMdSearch className='absolute text-2xl mt-2 ml-2 '/>
         <input type="search"
         placeholder='Search your favourite book'
         className='min-w-72 rounded  p-1.5 pl-10 bg-[#f5f5f5] border-black border text-sm' />
        </div>
          

        <div className='text-xl  font-light flex gap-10'>
            <span className='flex'>
            <CiShoppingCart className='text-2xl font-semibold'/>
             <sup className='text-xs -left-1 text-green-500'> 2</sup>   
            </span>
            <CiGift className='text-2xl font-semibold'/>
            { 
            (isLogin) 
            
            ?
            <FiUser className='text-2xl font-semibold'/>
            :
            ''
}
           
    </div>
    </div>
      

</section>

    </>
  )
}
