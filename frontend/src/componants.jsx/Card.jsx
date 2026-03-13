import React from 'react'
import { BookApi } from '../api/BookApi';
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { BsClockHistory } from "react-icons/bs";



export default function Card() {
  return (
    <>
      
      <section className='w-11/12 min-h-screen  my-20 m-auto'>
<hr className='h-[2px] bg-[#ffdc2e]  mt-20 font-bold w-3/4 m-auto  '/>

      <div className=' flex justify-between h-20  my-10 items-center'>
        <div>
          <h2 className='text-5xl font-semibold'>
            Best Sellers
          </h2>
          <p className='text-xs my-2'>
            Read What Millions Have Loved!
          </p>
        </div>
        <div>
          <button className='btn flex border items-center justify-between gap-2 px-4 py-2 text-xs '>Show all 
          <span><IoIosArrowRoundUp className=' rotate-45'/></span>
          </button>
        </div>
      </div>


<div className='flex flex-row '>
{
  BookApi.map((item, index)=>{
    return(
      <>
<div key={index} className='w-[220px] py-2 m-2  bg-white rounded-md'>
      <div key={index} className='text-xs font-semibold'>
  <img src={item.image} className='my-1 hover:scale-105 transition-all ease-in-out h-[180px]'  alt="book image" />
  <h1 className='mx-2'>{item.title}</h1>
  <h1 className='mx-2 my-3'>{item.auther}</h1>

  <div className='flex flex-row gap-1  justify-around'>
  <p className=' line-through flex items-center'> <LiaRupeeSignSolid/> {item.oldPrice}</p>
  <h1 className=' flex items-center'>  <LiaRupeeSignSolid/> {item.newPrice}</h1>
  <p className='bg-green-300 py-[1px]  px-[6px] rounded-md flex items-center'> <LiaRupeeSignSolid/>{item.offPrice}</p>
  </div>

</div>
  <button className='group relative overflow-hidden bg-orange-300 px-8  transition-all duration-300 hover:bg-orange-300 w-11/12 m-auto gap-2 items-center flex my-2 py-1.5 font-semibold text-sm rounded-lg justify-center  myBgColour'><span className='relative z-10 flex gap-1'> <IoBagHandleOutline className='text-[18px]'/> Add to Bag </span>
  <div class="absolute inset-0 -translate-x-full scale-x-125 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/100 to-transparent transition-all duration-500 group-hover:translate-x-full">
  </div> 
  </button>
      
  </div>
      </>
    )
  })
}
</div>
<div>
</div>
<hr className='h-[2px] bg-[#ffdc2e]  mt-20 font-bold w-3/4 m-auto  '/>

<section>
   <div className=' flex justify-between h-20  my-10 items-center'>
        <div>
          <h2 className='text-5xl font-semibold'>
           Coming Soon
          </h2>
          <p className='text-xs my-2'>
            Countdown to your next obsession.
          </p>
        </div>
        <div>
          <button className='btn flex border items-center justify-between gap-2 px-4 py-2 text-xs '>Show all 
          <span><IoIosArrowRoundUp className=' rotate-45'/></span>
          </button>
        </div>
      </div>


<div className='flex flex-row '>
{
  BookApi.map((item, index)=>{
    return(
      <>
<div key={index} className='w-[220px] py-2 m-2  bg-white rounded-md'>
      <div key={index} className='text-xs font-semibold'>
  <img src={item.image} className='my-1 hover:scale-105 transition-all ease-in-out h-[180px]'  alt="book image" />

  <button className='group relative overflow-hidden bg-orange-300 px-1  transition-all duration-300 hover:bg-orange-300 w-11/12 m-auto gap-1 items-center flex my-4 py-1.5 font-semibold text-xs rounded-lg justify-center  myBgColour'><span className='relative z-10 flex gap-1 items-center'> <BsClockHistory className='text-[16px]'/> Releasing in {} </span>
  <div class="absolute inset-0 -translate-x-full scale-x-125 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/100 to-transparent transition-all duration-500 group-hover:translate-x-full">
  </div> 
  </button>
  <h1 className='mx-2'>{item.title}</h1>
  <h1 className='mx-2 my-3'>{item.auther}</h1>

  <div className='flex flex-row gap-1  justify-around'>
  <p className=' line-through flex items-center'> <LiaRupeeSignSolid/> {item.oldPrice}</p>
  <h1 className=' flex items-center'>  <LiaRupeeSignSolid/> {item.newPrice}</h1>
  <p className='bg-green-300 py-[1px]  px-[6px] rounded-md flex items-center'> <LiaRupeeSignSolid/>{item.offPrice}</p>
  </div>

</div>
  <button className='group relative overflow-hidden bg-orange-300 px-5  transition-all duration-300 hover:bg-orange-300 w-11/12 m-auto gap-1 items-center flex my-4 py-1.5 font-semibold text-sm rounded-lg justify-center  myBgColour'><span className='relative z-10 flex gap-1'> <IoBagHandleOutline className='text-[18px]'/> Pre-Order Now </span>
  <div class="absolute inset-0 -translate-x-full scale-x-125 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/100 to-transparent transition-all duration-500 group-hover:translate-x-full">
  </div> 
  </button>
      
  </div>
      </>
    )
  })
}
</div>
</section>

{/* ----------------------------------------------------------------------------------- */}

<hr className='h-[2px] bg-[#ffdc2e]  mt-20 font-bold w-3/4 m-auto  '/>


<section>
 <div className=' flex justify-between h-20  my-10 items-center'>
        <div>
          <h2 className='text-5xl font-semibold'>
           Trending Now
          </h2>
          <p className='text-xs my-2'>
           Books Everyone’s Talking About!
          </p>
        </div>
        <div>
          <button className='btn flex border items-center justify-between gap-2 px-4 py-2 text-xs '>Show all 
          <span><IoIosArrowRoundUp className=' rotate-45'/></span>
          </button>
        </div>
      </div>


<div className='flex flex-row '>
{
  BookApi.map((item, index)=>{
    return(
      <>
<div key={index} className='w-[220px] py-2 m-2  bg-white rounded-md'>
      <div key={index} className='text-xs font-semibold'>
  <img src={item.image} className='my-1 hover:scale-105 transition-all ease-in-out h-[180px]'  alt="book image" />

  <h1 className='mx-2'>{item.title}</h1>
  <h1 className='mx-2 my-3'>{item.auther}</h1>

  <div className='flex flex-row gap-1  justify-around'>
  <p className=' line-through flex items-center'> <LiaRupeeSignSolid/> {item.oldPrice}</p>
  <h1 className=' flex items-center'>  <LiaRupeeSignSolid/> {item.newPrice}</h1>
  <p className='bg-green-300 py-[1px]  px-[6px] rounded-md flex items-center'> <LiaRupeeSignSolid/>{item.offPrice}</p>
  </div>

</div>
  <button className='group relative overflow-hidden bg-orange-300 px-5  transition-all duration-300 hover:bg-orange-300 w-11/12 m-auto gap-1 items-center flex my-4 py-1.5 font-semibold text-sm rounded-lg justify-center  myBgColour'><span className='relative z-10 flex gap-1'> <IoBagHandleOutline className='text-[18px]'/> Buy Now </span>
  <div class="absolute inset-0 -translate-x-full scale-x-125 skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/100 to-transparent transition-all duration-500 group-hover:translate-x-full">
  </div> 
  </button>
      
  </div>
      </>
    )
  })
}
</div>


  
</section>




  </section>



    </>
  )
}
