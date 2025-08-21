import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating ribbons */}
        <div className="absolute top-20 left-10 w-4 h-16 bg-gradient-to-b from-purple-500 to-transparent rounded-full opacity-30 animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-3 h-12 bg-gradient-to-b from-cyan-400 to-transparent rounded-full opacity-40 animate-float-medium"></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-20 bg-gradient-to-b from-pink-500 to-transparent rounded-full opacity-35 animate-float-fast"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-purple-500 rounded-full opacity-60 animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-50 animate-bounce-medium"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-500 rounded-full opacity-70 animate-bounce-fast"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Gift your{' '}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                loved ones
              </span>{' '}
              in Sri Lanka
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg">
              Send heartfelt surprises and create magical moments for your family and friends across Sri Lanka with our curated gift boxes.
            </p>
            
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center space-x-3">
              <span>Let's gift</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right side - Animated gift box */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main gift box */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
                {/* Gift box base */}
                <div className="w-full h-full bg-gradient-to-br from-pink-600 to-purple-700 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
                  {/* Gift box lid */}
                  <div className="absolute -top-4 left-4 right-4 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-2xl shadow-lg"></div>
                  
                  {/* Ribbon vertical */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-full bg-gradient-to-b from-cyan-400 to-cyan-600 shadow-inner"></div>
                  
                  {/* Ribbon horizontal */}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-6 bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-inner"></div>
                  
                  {/* Bow */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-8 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full transform rotate-45 shadow-lg"></div>
                    <div className="absolute top-0 left-0 w-12 h-8 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-full transform -rotate-45 shadow-lg"></div>
                  </div>
                </div>
              </div>

              {/* Sparkle effects */}
              <div className="absolute -top-8 -right-8 w-4 h-4 bg-yellow-400 rounded-full opacity-80 animate-ping"></div>
              <div className="absolute top-1/4 -left-6 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-70 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;