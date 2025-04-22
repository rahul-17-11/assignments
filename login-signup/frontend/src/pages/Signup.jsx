import React from 'react'
import {useFormik} from "formik"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
      const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            userName:"",
            userEmail:"",
            password:""
        },
        onSubmit:async(values)=>{
            try {
                await axios.post("http://localhost:5000/api/auth/signup",values)
                alert("User registered successfully")
                navigate("/")
            } catch (error) {
                alert(error.response.data.message)
            }
        }
    })
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='bg-clip-text text-transparent bg-gradient-to-tl from-sky-300 text-5xl font-semibold to-sky-600'>Sign Up form </h1>
    <form className='flex flex-col justify-center items-center gap-2 my-12' onSubmit={formik.handleSubmit}>
        <input className='p-2 text-slate-800 border-2 border-sky-700 rounded-sm ' name="userName" onChange={formik.handleChange} values={formik.values.userName} placeholder='Enter your name' type="text" />
        <input className='p-2 text-slate-800 border-2 border-sky-700 rounded-sm ' name="userEmail" onChange={formik.handleChange} values={formik.values.userEmail} placeholder='Enter your email' type="email" />
        <input className='p-2 text-slate-800 border-2 border-sky-700 rounded-sm ' name="password" onChange={formik.handleChange} values={formik.values.password} placeholder='Enter your password' type="password" />
        <input className='bg-sky-500 mt-4 text-2xl hover:bg-sky-600 text-white p-2 rounded-xl' type="submit" />
    </form>
    <p className='mx-auto'>New user Click here to <span className='text-rose-600 cursor-pointer' onClick={()=>navigate("/")}>Sign Up</span></p>
    </div>
  )
}

export default Signup