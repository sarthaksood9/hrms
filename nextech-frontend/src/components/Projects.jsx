import React from 'react'
import { MdPendingActions } from "react-icons/md"
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate=useNavigate()
    const v = 69;
    return (
        <div className='w-full flex gap-6'>
            <div className='p-3 py-5 shadow-2xl flex flex-col gap-6 rounded-2xl min-w-[17rem] flex-wrap cursor-pointer' onClick={() => { navigate('/project') }}>
                <div className='flex items-center gap-6 justify-between'>
                    <div className='flex flex-col justify-between gap-3'>
                        <div className='flex items-center'>
                            <div className='text-red-600 text-[1.6rem] font-bold'>1.</div>
                            <h1 className='text-[1.5rem] inline'>Project </h1>
                        </div>
                        <div className='self-start'>
                            <p>DeadLine</p>
                        </div>
                    </div>
                    <div className='text-[4rem] text-gray-400 opacity-80 mt-4 '>
                        <MdPendingActions />
                    </div>
                </div>
                <div className='progress relative overflow-hidden rounded-3xl bg-slate-400 w-full h-[0.5rem]' style={{
                    "--w": `${50}%`,
                }}></div>
            </div>
            <div className='p-3 py-5 shadow-2xl flex flex-col gap-6 rounded-2xl min-w-[17rem] cursor-pointer' onClick={() => { navigate('/project') }}>
                <div className='flex items-center gap-6 justify-between'>
                    <div className='flex flex-col justify-between gap-3'>
                        <div className='flex items-center'>
                            <div className='text-red-600 text-[1.6rem] font-bold'>2.</div>
                            <h1 className='text-[1.5rem] inline'>Project </h1>
                        </div>
                        <div className='self-start'>
                            <p>DeadLine</p>
                        </div>
                    </div>
                    <div className='text-[4rem] text-gray-400 opacity-80 mt-4 '>
                        <MdPendingActions />
                    </div>
                </div>
                <div className='progress relative overflow-hidden rounded-3xl bg-slate-400 w-full h-[0.5rem]' style={{
                    "--w": `${80}%`,
                }}></div>
            </div>
            <div className='p-3 py-5 shadow-2xl flex flex-col gap-6 rounded-2xl min-w-[17rem] cursor-pointer' onClick={() => { navigate('/project') }}>
                <div className='flex items-center gap-6 justify-between'>
                    <div className='flex flex-col justify-between gap-3'>
                        <div className='flex items-center'>
                            <div className='text-red-600 text-[1.6rem] font-bold'>3.</div>
                            <h1 className='text-[1.5rem] inline'>Project </h1>
                        </div>
                        <div className='self-start'>
                            <p>DeadLine</p>
                        </div>
                    </div>
                    <div className='text-[4rem] text-gray-400 opacity-80 mt-4 '>
                        <MdPendingActions />
                    </div>
                </div>
                <div className='progress relative overflow-hidden rounded-3xl bg-slate-400 w-full h-[0.5rem]' style={{
                    "--w": `${44}%`,
                }}></div>
            </div>
            <div className='p-3 py-5 shadow-2xl flex flex-col gap-6 rounded-2xl min-w-[17rem] cursor-pointer' onClick={() => { navigate('/project') }}>
                <div className='flex items-center gap-6 justify-between'>
                    <div className='flex flex-col justify-between gap-3'>
                        <div className='flex items-center'>
                            <div className='text-red-600 text-[1.6rem] font-bold'>4.</div>
                            <h1 className='text-[1.5rem] inline'>Project </h1>
                        </div>
                        <div className='self-start'>
                            <p>DeadLine</p>
                        </div>
                    </div>
                    <div className='text-[4rem] text-gray-400 opacity-80 mt-4 '>
                        <MdPendingActions />
                    </div>
                </div>
                <div className='progress relative overflow-hidden rounded-3xl bg-slate-400 w-full h-[0.5rem]' style={{
                    "--w": `${10}%`,
                }}></div>
            </div>
        </div>
    )
}

export default Projects