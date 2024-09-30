 import {FaSearch} from 'react-icons/fa'
 import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Header=()=> {
  return (
    <header className='bg-slate-700 shadow-md'> 
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'> 
    <Link to='/'> 
        <h1 className='font-bold text-sm sm:text-xl'>
             
            <span className='px-1 text-slate-200'>Satyam</span>
            <span className='px-1 text-white'>Estate</span>
        </h1>
    </Link>
       <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder='search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
        <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'> 
           <li className='hidden sm:inline text-white hover:underline'>Home</li>
           </Link>
            <Link to='/about'> 
           <li className='hidden sm:inline text-white hover:underline'>About</li>
           </Link>
           <Link to='/sign-in'> 
           <li className=' sm:inline text-white hover:underline px-2'>Sign in</li>
           </Link>  
           <Link to='/sign-up'> 
           <li className=' sm:inline text-white hover:underline px-2'>Sign Up</li>
           </Link>    
        </ul> 
        </div>
    </header>
  )
}

export default Header