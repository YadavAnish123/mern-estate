import React from 'react'

const SignUP=()=> {
  return (
    <div className='p-3 max-w-lg mx-auto py-8'> 
      <h1 className='font-semibold text-center py-8'>SignUP</h1>
      <form className='flex flex-col gap-4'>
        <input className='border p-3 rounded-lg' type="text" placeholder='username' id='username' />
        <input className='border p-3 rounded-lg' type="email" placeholder='email' id='email' />
        <input className='border p-3 rounded-lg' type="password" placeholder='password' id='password'/> 
        <button className='bg-slate-700 p-3 rounded-lg text-white hover:opacity-90' type='button' id='button'>submit</button>
      </form>
    </div>
  )
}

export default SignUP