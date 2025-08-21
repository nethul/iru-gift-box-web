// import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TestimonialsSlider from './components/TestimonialsSlider';
import GiftSection from './components/GiftSection';
import CustomizeSection from './components/CustomizeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <HeroSection />
      <TestimonialsSlider />
      <GiftSection />
      <CustomizeSection />
      <Footer />
    </div>
  );
}

export default App;