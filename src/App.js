
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

// const Home = React.lazy(()=>import('./client/pages/Home'))

import Home from './client/pages/Home';
import AboutUs from './client/pages/AboutUs';
import ContactUs from './client/pages/ContactUs';
import OurGallery from './client/pages/OurGallery';
import Clients from './client/pages/Clients';
import Carrer from './client/pages/Carrer';



function App() {
  return (
    <Routes>
      <Route path="/" element={<React.Suspense fallback={<h1>Loading</h1>}><Home/></React.Suspense>}/>
      <Route path="/clients" element={<React.Suspense fallback={<h1>Loading</h1>}><Clients/></React.Suspense>}/>
      <Route path="/carrer" element={<React.Suspense fallback={<h1>Loading</h1>}><Carrer/></React.Suspense>}/>
      <Route path="/gallery" element={<React.Suspense fallback={<h1>Loading</h1>}><OurGallery/></React.Suspense>}/>
      <Route path="/about-us" element={<React.Suspense fallback={<h1>Loading</h1>}><AboutUs/></React.Suspense>}/>
      <Route path="/contact-us" element={<React.Suspense fallback={<h1>Loading</h1>}><ContactUs/></React.Suspense>}/>
    </Routes>
  );
}

export default App;
