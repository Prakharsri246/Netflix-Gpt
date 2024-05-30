import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSiginForm , setIsSiginForm] =useState(true);
    const toggleSiginForm =()=>{
         setIsSiginForm(!isSiginForm);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img 
        src=" https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_medium.jpg
        "
        alt="login-baground"
        />
        </div>

        <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' >
            <h1 className='font-bold text-3xl py-4'> {isSiginForm ? "Sign In" :"Sign Up"}</h1>
            {!isSiginForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'   /> }
            <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 '  />
         
            <input type="text" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'   />
            <button className='p-4  my-6 bg-red-700 w-full rounded-lg'>{isSiginForm ? "Sign In" :"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSiginForm}> {isSiginForm ? "Are you new to Netflix? Sign Up Now" : "Already Registered ? Sign in Now"}</p>
        </form>
    </div>
  )
} 

export default Login;