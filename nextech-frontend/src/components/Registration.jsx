import React, { useContext, useState } from 'react'
import axios from "axios"
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { useStore } from "../zustand/userstand.js"
// import { useNavigate } from 'react-router-dom';



export const SignUp = () => {
    const [name, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("teacher");
    const [loader, setLoader] = useState(false);


    return (
        <div className='py-[2rem] px-[4rem] flex flex-col items-center gap-5 pb-[3rem] '>
            <div className='text-[2.9rem] font-[500]'>
                <h1>Create your account.</h1>
            </div>
            <div className='w-[70%]'>
                <h3>Build skills for today, tomorrow, and beyond.
                    Education to future-proof your career.
                </h3>
            </div>
            <div className='flex flex-col gap-6 w-full'>
                <input value={name} onChange={(e) => { setFirstName(e.target.value) }} className='w-full h-8 border-[1px] rounded-xl px-3 py-5 text-[#455c8a]' type="text" placeholder='Name' id='name' />

                <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='w-full h-8 border-[1px] rounded-xl px-3 py-5' type="text" placeholder='Email' id='email' />

                <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='w-full h-8 border-[1px] rounded-xl px-3 py-5' type="text" placeholder='Enter Password' id='password' />
                {/* <label>Sign Up As..</label> */}
                {/* <select value={role} onChange={(e) => { setRole(e.target.value) }} placeholder="slecet role" id="role" name="role" class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500">
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select> */}

                <button className='w-[80%] self-center py-2 text-white border-[2px] rounded-xl bg-[#3E65D3]'>Sign Up</button>


            </div>
        </div>
    )
}

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState("");
    const user=useContext(UserContext);
    const navigate=useNavigate();


    const hendleLogin=(email,password)=>{
        axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/user/login`,{email,password})
        .then((req,res)=>{
            user.logIn(req.data.user);
            navigate("/");
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    console.log(user);







    
        return (
        <div className='py-[2rem] px-[4rem] flex flex-col items-center gap-5 pb-[3rem] '>
            <div className='text-[2.9rem] font-[500]'>
                <h1>Login to your account.</h1>
            </div>
            <div className='w-[70%]'>
                <h3>Build skills for today, tomorrow, and beyond.
                    Education to future-proof your career.
                </h3>
            </div>
            <div className='flex flex-col gap-6 w-full'>

                <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='w-full h-8 border-[1px] rounded-xl px-3 py-5' type="text" placeholder='Email' id='email' />

                <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='w-full h-8 border-[1px] rounded-xl px-3 py-5' type="password" placeholder='Enter Password' id='password' />



                <button onClick={()=>{hendleLogin(email,password)}}  className='w-[80%] self-center py-2 text-white border-[2px] rounded-xl bg-[#3E65D3]'>Sign In</button>


            </div>
        </div>
    )
}

const Registration = () => {
    const [login, setLogin] = useState(true);

    return (
        <div className='w-full  flex bg-[#F6F6F6] justify-center items-center fixed top-0 left-0 h-screen'>
            <div className='w-[50%] h-fit bg-white'>
                <div className='w-full flex cursor-pointer'>
                    <div className={`w-[50%] text-[1.3rem] px-4 py-[1rem] h-fit ${login ? "bg-[#F6F6F6]" : "bg-white"}`} onClick={() => { setLogin(!login) }}>
                        <h1>Signup</h1>
                    </div>
                    <div className={`w-[50%] text-[1.3rem] px-4 py-[1rem] h-fit ${!login ? "bg-[#F6F6F6]" : "bg-white"}`} onClick={() => { setLogin(!login) }}>
                        <h1>SignIn</h1>
                    </div>
                </div>
                {login ? <SignIn /> : <SignUp />}

            </div>

        </div>
    )
}

export default Registration