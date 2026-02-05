
import React from 'react';
import Navbar from './Components/Navbar'; 
import Hero from './Components/Hero';
import About from './Components/About';
import Features from './Components/Features';
import Pricing from './Components/Pricing';
import Amenities from './Components/Amenities';
import FloorPlans from './Components/FloorPlans';
import VirtualTour from './Components/VirtualTour';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900">
      
    
      <Navbar />
      <Hero />
      <About />
      <Features/>
      <Pricing />
      <Amenities />
      <FloorPlans />
      <VirtualTour />
      <Footer />
    </div>
  );
}

export default App;