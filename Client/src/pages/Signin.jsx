import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
 import {  useDispatch, useSelector } from 'react-redux';
import { signInStart,signInFailure,signInSucess } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
const Signin=()=> {
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
  });
   const {loading,error}=useSelector((state)=>state.user)
  const navigate=useNavigate();
  const dispatch=useDispatch()

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (data.success==false) { // Corrected spelling of 'success'
         dispatch(signInFailure(data.message))
        return;
      }
      

      
      // Optionally, redirect the user or clear the form here
      dispatch(signInSucess(data))
      navigate('/')
      
       

    } catch (error) {
       dispatch(signInFailure(error.message))
    }  
  }
  return (
    <div className='p-3 max-w-lg mx-auto py-8 '> 
    <h1 className='font-semibold text-center py-8'>SignIN</h1>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}> {/* Use onSubmit on the form */}
      <input
        className='border p-3 rounded-lg' 
        type="email" 
        placeholder='email' 
        id='email'  
        value={formData.email} 
        onChange={onChangeHandler}
      />
      <input 
        className='border p-3 rounded-lg' 
        type="password" 
        placeholder='password' 
        id='password' 
        value={formData.password} 
        onChange={onChangeHandler}
      /> 
      <button 
        className='bg-slate-700 p-3 rounded-lg text-white hover:opacity-90' 
        type='submit' // Change type to 'submit'
        disabled={loading} // Disable button while loading
      >
        {loading ? 'Loading...' : 'Submit'} {/* Conditional button text */}
      </button>
      <OAuth/>
      <span className='hover:underline text-center'>
        Dont have an account? 
        <Link className='text-cyan-700' to={'/sign-up'}> SignUp</Link>
      </span>
    </form>
    {error && <p className='text-red-500'>{error}</p>}
  </div>
);
  
}

export default Signin