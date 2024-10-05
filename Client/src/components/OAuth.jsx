// import React from 'react'
// import {GoogleAuthProvider, signInWithPopup,getAuth} from 'firebase/auth'
// import {app} from '../firebase.js'
// import { signInSucess,signInFailure } from '../redux/user/userSlice.js'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router'


// const OAuth=()=> {
//   const  navigate=useNavigate()
    
//   const dispatch=useDispatch();
//    const  hanldeGoogleClick=async ()=>{
//     try{
        
//         const provider=new GoogleAuthProvider
//         const auth= getAuth(app)
//         const result= await signInWithPopup(auth, provider)
//         const res= await fetch('api/auth/google',
//            { method:'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL})
//            }

//         )
//         const data= await res.json();
//         dispatch(signInSucess)
//         const {currentUser}=useSelector(state=>state.user)
//           console.log(currentUser.avatar+112222)
//        console.log(data)
//        navigate('/')
//     }catch(error){
//       console.log(error.message)
//       dispatch(signInFailure(error.message))
//     }
//    }
//   return (
//     <button onClick={hanldeGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg'>Continue With Google</button>
//   )
// }

// export default OAuth

import React from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase.js';
import { signInSucess,signInFailure } from '../redux/user/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const OAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user); // Move this outside of the function

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch('api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();
      dispatch(signInSucess(data)); // Make sure to call the function here
      console.log(currentUser?.avatar); // Use optional chaining
      console.log(data);
      navigate('/');
    } catch (error) {
      console.log(error.message);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type='button'
      className='bg-red-700 text-white p-3 rounded-lg'>
      Continue With Google
    </button>
  );
};

export default OAuth;
