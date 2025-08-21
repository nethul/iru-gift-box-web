import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import {User, Truck, Heart} from 'lucide-react';

const CustomizeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Create Something{' '}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Unique
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Can't find the perfect gift? Design your own personalized gift box with items that perfectly match your loved one's preferences and interests.
          </p>

          <button className="group bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-600 text-white font-bold px-10 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center space-x-4 mx-auto">
          <button 
            onClick={() => window.open('/customize', '_blank')}
            className="group bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-600 text-white font-bold px-10 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center space-x-4 mx-auto"
          >
            <span>Customize a gift myself</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>

          {/* Feature highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Personalized</h3>
              <p className="text-gray-400 text-sm">Tailor every detail to their personality</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-10 h-10 text-white"/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-400 text-sm">Quick and reliable shipping across Sri Lanka</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-9 h-9 text-white"/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Made with Love</h3>
              <p className="text-gray-400 text-sm">Every gift is carefully crafted and packaged</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;