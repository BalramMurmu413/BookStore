import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='w-11/12 h-screen items-center justify-center flex-col flex text-4xl border m-auto '>

      <div className='w-full flex flex-col items-center justify-center my-5'>
      <h1>We're Sorry! </h1>
      <h2>Page not Found</h2>
      </div>

      <button className='btn bg-slate-200 px-6 py-2 rounded-t-lg hover:scale-105'>
        <Link to='/'>
        Go To Home
        </Link>
      </button>
    </div>
  )
}
