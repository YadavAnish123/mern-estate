 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import SignUP from './pages/SignUP';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './pages/Footer';
import {PrivateRoute} from './components/PrivateRoute';
import PropertyDetail from './pages/PropertyDetail';
import Contact from './pages/Contact';
import {
  getDownloadURL,
  getStorage,
  ref,
  listAll
} from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { app } from '../src/firebase';
  
 const App = () => {
  const [logoUrl, setLogoUrl] = useState(''); // State for logo URL
  const storage = getStorage(app);
  useEffect(() => {
    // Get all images from Firebase
    listAll(ref(storage, 'logo')).then(imgs => {
      if (imgs.items.length > 0) {
        getDownloadURL(imgs.items[0]).then(url => {
          setLogoUrl(url) // Set the first logo URL
          console.log('Logo URL:', url); // Log the URL
        });
      }
    });
  }, []);
  return  <BrowserRouter>
  <Header /> 
  <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/sign-in' element={<Signin/>}/> 
    <Route path='/sign-up' element={<SignUP/>}/> 
    <Route path='/about' element={<About logoUrl={logoUrl}/>}/> 
    <Route   element={<PrivateRoute/>}> 
    <Route path='/profile' element={<Profile/>}/> 
    <Route path="/property/:id" element={<PropertyDetail/>} />
    <Route path="/contact" element={<Contact logoUrl={logoUrl}/>} />
    </Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
 }
 
  
 export default App;