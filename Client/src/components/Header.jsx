 
import { FaSearch, FaBars, FaHome, FaProjectDiagram, FaInfoCircle, FaPhoneAlt ,FaEnvelope } from 'react-icons/fa'; // Import necessary icons
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  getDownloadURL,
  getStorage,
  ref,
  listAll
} from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { app } from '../firebase';

const Header = () => {
  const [logoUrl, setLogoUrl] = useState('');
  const storage = getStorage(app);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Get all images from Firebase
    listAll(ref(storage, 'logo')).then(imgs => {
      if (imgs.items.length > 0) {
        getDownloadURL(imgs.items[0]).then(url => {
          setLogoUrl(url); // Set the first logo URL
        });
      }
    });
  }, []);

  const { currentUser } = useSelector(state => state.user);

  return (
    <header className='bg-slate-700 shadow-md sticky top-0 z-50'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/' className='flex items-center'>
          {logoUrl && (
            <img
              src={logoUrl}
              alt='Logo'
              className='w-16 h-16 rounded-full border-2 border-white ml-2 object-cover'
            />
          )}
          <h1 className='font-serif ml-3 mb-1 text-sm sm:text-xl'>
            <span className='px-1 text-slate-100'>LANDMARKS</span>
            <span className='px-1 text-slate-100'>REALITY</span>
          </h1>
        </Link>
        <button className='sm:hidden' onClick={() => setSidebarOpen(true)}>
          <FaBars className='text-slate-100' />
        </button>
        <form className='hidden sm:flex bg-slate-200 p-3 rounded-lg'>
          <input type="text" placeholder='search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-100' />
        </form>

        {/* Desktop Navigation */}
        <ul className='hidden sm:flex gap-4 text-sm sm:text-xl'>
          <Link to='/'>
            <li className='text-slate-100 hover:underline'>Home</li>
          </Link>
          <Link to='/projects'>
            <li className='text-slate-100 hover:underline'>Projects</li>
          </Link>
          <Link to='/about'>
            <li className='text-slate-100 hover:underline'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='text-slate-100 hover:underline'>Contact</li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt='User Avatar'
                className='w-8 h-8 rounded-full border-2 border-white ml-2 object-cover'
              />
            ) : (
              <li className='text-slate-100 hover:underline'>Sign in</li>
            )}
          </Link>
          <Link to='/sign-up'>
            <li className='text-slate-100 hover:underline'>Sign Up</li>
          </Link>
        </ul>
      </div>
      {/* Pass logoUrl to Contact route */}
       

      {/* Sidebar */}
      {sidebarOpen && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 z-40' onClick={() => setSidebarOpen(false)}>
          <div className='bg-slate-50 w-64 h-full p-5 relative'>
            <button className='absolute top-2 right-2 text-3xl mr-2' onClick={() => setSidebarOpen(false)}>✖</button>
            <div className='flex  mb-4'>
              {logoUrl && (
                <img
                  src={logoUrl}
                  alt='Logo'
                  className='w-32 h-32'
                />
              )}
            </div>
            <ul className='flex flex-col gap-8 text-lg'>
              <Link to='/' onClick={() => setSidebarOpen(false)}>
                <li className='flex items-center text-slate-700 hover:underline'>
                  <FaHome className='mr-2' /> Home
                </li>
              </Link>
              <Link to='/projects' onClick={() => setSidebarOpen(false)}>
                <li className='flex items-center text-slate-700 hover:underline'>
                  <FaProjectDiagram className='mr-2' /> Projects
                </li>
              </Link>
              <Link to='/about' onClick={() => setSidebarOpen(false)}>
                <li className='flex items-center text-slate-700 hover:underline'>
                  <FaInfoCircle className='mr-2' /> About Us
                </li>
              </Link>
              <Link to='/contact' onClick={() => setSidebarOpen(false)}>
                <li className='flex items-center text-slate-700 hover:underline'>
                  <FaPhoneAlt className='mr-2' /> Contact
                </li>
              </Link>
            </ul>
             
            <div className='mt-36 text-slate-700'>
            <hr className='my-4  border-slate-800' />
             
             
            <p className='font-bold '>To More Inquiry</p>
             
            <p className='font-bold mt-2 '>📞 +91-7007648643</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
