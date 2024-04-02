import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate =useNavigate();
  return (
    <div className='h-14 w-full z-10 fixed top-0 shadow-black bg-slate-300 flex justify-between items-center px-12'>
      <div className='flex'>
        <h1 className='font-bold text-[1.4rem]'>NexTech</h1>

      </div>
      <div className="flex gap-4 ">
        <div onClick={()=>{
          navigate('/attendance')
        }}>Addtendance</div>
        <div>Tasks</div>
        <div>Reports</div>
        <div on onClick={()=>{
          navigate('/login')
        }}>Login</div>
      </div>
    </div>
  )
}

export default Header