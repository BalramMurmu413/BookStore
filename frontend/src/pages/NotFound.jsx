import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='w-11/12 h-screen items-center justify-center flex text-6xl border m-auto '>
      <button className='btn bg-slate-200 px-6 py-2 rounded-t-lg hover:scale-105'>
        <Link to='/'>
        Go To Home
        </Link>
      </button>
    </div>
  )
}
