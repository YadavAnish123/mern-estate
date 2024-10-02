import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

const SignUP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate=useNavigate();

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      setLoading(true); // Start loading before the fetch
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
      if (data.success===false) { // Corrected spelling of 'success'
        setError(data.message); // Corrected spelling of 'message'
        setLoading(false);
        return;
      }

      console.log(data);
      // Optionally, redirect the user or clear the form here
      setError(null)
      setLoading(false)
      navigate('/sign-in')

    } catch (error) {
      setError(error.message || 'An error occurred'); // Default message if error.message is not available
      setLoading(false);
    }  
  };

  return (
    <body className='p-3 max-w-lg mx-auto py-8'> 
      <h1 className='font-semibold text-center py-8'>SignUP</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}> {/* Use onSubmit on the form */}
        <input 
          className='border p-3 rounded-lg' 
          type="text" 
          placeholder='username' 
          id='name'  
          value={formData.name} 
          onChange={onChangeHandler}
        />
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
        <span className='hover:underline text-center'>
          Already have an account? 
          <Link className='text-cyan-700' to={'/sign-in'}> Login</Link>
        </span>
      </form>
      {error && <p className='text-red-500'>{error}</p>}
    </body>
  );
};

export default SignUP;
