import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdPendingActions } from "react-icons/md"
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState();
    useEffect(() => {
        const fatchProjects = async () => {
            await axios.get("http://localhost:4000/api/v1/admin/projects").
                then((req, res) => {
                    setProjects(req.data);
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        fatchProjects();
    }, [])

    console.log(projects)
    const v = 69;
    return (

        <>

            <div className='w-full flex gap-6 flex-wrap'>
                {projects?.map((i, x) => {
                    const date=new Date(i.ProjectDeadLine)
                    return (
                        <div className='p-3 py-5 shadow-2xl flex flex-col gap-6 rounded-2xl max-w-[17rem] flex-wrap cursor-pointer' onClick={() => { navigate(`/project/${i._id}`) }}>
                            <div className='flex items-center gap-6 justify-between'>
                                <div className='flex flex-col justify-between gap-3'>
                                    <div className='flex items-center'>
                                        <div className='text-red-600 text-[1.6rem] font-bold'>{x + 1}.</div>
                                        <h1 className='text-[1.5rem] inline'>{i.Projectname} </h1>
                                    </div>
                                    <div className='self-start text-[0.9rem]'>
                                        <p>DeadLine: <b>{date.toLocaleDateString()}</b></p>
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
                    )
                })}
            </div>
        </>
    )
}

export default Projects