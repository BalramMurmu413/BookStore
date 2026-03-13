import React from 'react'

export default function ProductCard() {
  return (
    <>
      <section className='w-11/12 min-h-screen m-auto flex bg-white py-1 flex-row'>

{/* left start */}

    <div className='w-1/2 border flex-col flex border-red-700 h-full'>
    <div className='h-full border w-full'> upper lorem59 part</div>
    <div className='h-3/5'>lower part</div>
    </div>
{/* left end */}



    

{/* right start */}
    <div className='w-1/2 flex flex-col '>
    <div  className='flex flex-row w-full justify-between  border-purple-600  h-1/2'>
    <div  className='flex flex-row m-2 border-purple-600  h-full'>
    <img src="./image/school3.jpg" alt=""  className='cover full rounded-xl'/>
    </div>


    <div className='flex flex-row m-2  border-pink-600  h-full'>
    <img src="./image/school1.jpg" alt=""  className='cover  rounded-xl' />
    </div>

    </div>


    <div className='w-full flex justify-center items-center border-red-600  h-1/2'>
<img src="./image/schoolwelcome.jpg" alt="" className='h-[270px] rounded-xl w-[560px]' />
    </div>
    </div>


      </section>
    </>
  )
}
