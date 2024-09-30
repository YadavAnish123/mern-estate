import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUP=()=> {
  const [formData,setformData]=useState({})
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const onchangehandler=(e)=>{
    setformData({
      ...formData,
      [e.target.id]:e.target.value
    })
  }

  console.log(formData)

  const handleSubmit=async(e)=>{
    e.preventDefault();
     
   const res= await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    const data=await res.json();
    console.log(data);
  }
  return (
    <div className='p-3 max-w-lg mx-auto py-8'> 
      <h1 className='font-semibold text-center py-8'>SignUP</h1>
      <form className='flex flex-col gap-4'>
        <input className='border p-3 rounded-lg' type="text" placeholder='username' id='name'  onChange={onchangehandler}/>
        <input className='border p-3 rounded-lg' type="email" placeholder='email' id='email'  onChange={onchangehandler}/>
        <input className='border p-3 rounded-lg' type="password" placeholder='password' id='password' onChange={onchangehandler}/> 
        <button className='bg-slate-700 p-3 rounded-lg text-white hover:opacity-90' type='button' id='button' onClick={handleSubmit}>submit</button>
        <span className='hover:underline text-center'>Already have an account? <Link className='text-cyan-700' to={'/sign-in'}>Login</Link></span>
      </form>
    </div>
  )
}

export default SignUP