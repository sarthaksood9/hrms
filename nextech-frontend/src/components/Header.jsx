import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const Header = () => {
  const navigate = useNavigate();

  const arr=["sarthak","sood"];
  console.log(arr.toString());

  const user = useContext(UserContext);
  return (
    <div className='h-14 w-full z-10 fixed top-0 shadow-black bg-slate-300 flex justify-between items-center px-12'>
      <div className='flex'>
        <h1 className='font-bold text-[1.4rem]'>NexTech</h1>

      </div>
      <div className="flex gap-4 ">
        <div onClick={() => {
          navigate('/attendance')
        }}>Addtendance</div>
        <div>Tasks</div>
        <div>Reports</div>
        {user.user ? <div on onClick={() => {
          user.logOut();
          navigate('/')
        }}>Logout</div> : <div on onClick={() => {
          // navigate('/')
        }}>Login</div>}
      </div>
    </div>
  )
}

export default Header