import React, { useState } from 'react'
import {FaEye,FaEyeSlash} from "react-icons/fa"

const Login = () => {
    const [type,setType] = useState('password')
    const [icon,setIcon] = useState(FaEyeSlash)
    const handleClick = ()=>{
        if(type === "password"){
            setType("text")
        }
        if(type === "text"){
            setType("password")
        }

    }
  return (
    <div className='mt-[80px]'>
        <h2 className='h2 text-center mb-8'>ثبت نام</h2>
        <div className='container mx-auto'>
            <div className='flex items-center justify-around gap-x-8'>
                <form className='flex flex-col gap-y-6 '>
                    <div className='flex items-center justify-between gap-x-4'>
                        <label>نام:</label>
                        <input className='border-2 p-2 rounded-xl' type='text' placeholder='نام...'/>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <label className=''>نام خانوادگی:</label>
                        <input className='border-2  p-2 rounded-xl' type='text' placeholder='نام خانوادگی ...'/>
                    </div>
                    <div className='flex items-center justify-between gap-x-4'>
                        <label>ایمیل:</label>
                        <input className='border-2  p-2 rounded-xl' type='email' placeholder='ایمیل...'/>
                    </div>
                    <div className='flex items-center justify-between gap-x-4 relative'>
                        <label>پسوورد:</label>
                        <input className='border-2  p-2 rounded-xl' type={type} placeholder='پسوورد...'/>
                        <div className='absolute left-0 cursor-pointer' onClick={handleClick}>
                        {
                            type === "password" ?  <FaEye/>: <FaEyeSlash />
                        }
                        </div>
                    </div>
                </form>
                <div className='bgregis'>hi</div>
            </div>
        </div>
    </div>
  )
}

export default Login