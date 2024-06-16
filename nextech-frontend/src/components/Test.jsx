import React, { useEffect, useRef, useState } from 'react'

const Test = () => {
    const [input,setInput]=useState("");
    const ref=useRef();

    useEffect(()=>{
        
        if(input.length%2==0){
            console.log("chala");
        }
        else{
            return;
        }
    },[input]);
  return (
    <div>
        <div>
            <input ref={ref} value={input} className='border-2' onChange={(e)=>{setInput(e.target.value)}}/>
        </div>
    </div>
  )
}

export default Test