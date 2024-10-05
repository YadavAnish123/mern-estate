import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router'
 

export const PrivateRoute=()=> {
     
    //const currentUser=useSelector((state)=>state.user);
  const currentUser = useSelector((state) => state.user.currentUser);
  return currentUser?<Outlet/>:<Navigate to='/sign-in'/>
}

 