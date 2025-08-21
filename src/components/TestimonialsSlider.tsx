import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Star } from 'lucide-react';
import priyaAvatar from '../assets/avatars/PriyaPerera (1).jpeg'
import kasunAvatar from '../assets/avatars/KasunSilva.jpeg'
import amaraAvatar from '../assets/avatars/AmaraFernando.jpeg'

interface Testimonial {
  id: number;
  name: string;
  message: string;
  rating: number;
  time: string;
  avatar: string;
  location: string;
}

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Perera",
      message: "මාර ලස්සන gift box එකක්. ආයෙමත් order කරනවාමයි.! 🎉💕",
      rating: 5,
      time: "2 hours ago",
      avatar: priyaAvatar,
      location: "Colombo"
    },
    {
      id: 2,
      name: "Kasun Silva",
      message: "Wow! I ordered the chocolate box for my mom's birthday and she was so happy! The delivery was super fast and the quality was amazing. Will definitely order again! 🍫❤️",
      rating: 5,
      time: "1 day ago",
      avatar: kasunAvatar,
      location: "Kandy"
    },
    {
      id: 3,
      name: "Amara Fernando",
      message: "The custom gift box I created was exactly what I wanted! The team helped me choose the perfect items for my best friend. She cried happy tears! 😭💖",
      rating: 5,
      time: "3 days ago",
      avatar: amaraAvatar,
      location: "Galle"
    }
    // {
    //   id: 4,
    //   name: "Nuwan Jayasinghe",
    //   message: "Amazing service! Ordered a surprise for my wife's anniversary and it was delivered on time. The presentation was outstanding. Highly recommend! 🌹✨",
    //   rating: 5,
    //   time: "5 days ago",
    //   avatar: "👨🏽",
    //   location: "Negombo"
    // },
    // {
    //   id: 5,
    //   name: "Sanduni Wickramasinghe",
    //   message: "The festival special box was incredible! So many traditional treats and the packaging was gorgeous. My family in Australia loved it! 🎊🇱🇰",
    //   rating: 5,
    //   time: "1 week ago",
    //   avatar: "👩🏻",
    //   location: "Jaffna"
    // }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-cyan-400 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="w-8 h-8 text-purple-500 mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What Our Customers Say
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real feedback from happy customers across Sri Lanka
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 max-w-4xl mx-auto">
            {/* Chat Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                {/* <span className="text-green-400 text-sm font-medium">Online</span> */}
              </div>
              <div className="text-gray-400 text-sm">Messenger chat</div>
            </div>

            {/* Current Testimonial */}
            <div className="min-h-[200px] flex flex-col justify-center">
              <div className="bg-gray-700/50 rounded-2xl p-6 mb-4 relative">
                {/* Message bubble tail */}
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-gray-700/50 transform rotate-45"></div>
                
                <p className="text-gray-200 text-lg leading-relaxed mb-4">
                  {testimonials[currentSlide].message}
                </p>
                
                <div className="flex items-center space-x-2">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                   <img
                        src={testimonials[currentSlide].avatar}
                        alt={testimonials[currentSlide].name}
                        className="w-full h-full object-cover rounded-full"
                      />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[currentSlide].name}
                  </h4>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <span>{testimonials[currentSlide].location}</span>
                    <span>•</span>
                    <span>{testimonials[currentSlide].time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-purple-600/80 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-600/50 hover:border-purple-500/50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-300 hover:text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-purple-600/80 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-600/50 hover:border-purple-500/50"
          >
            <ChevronRight className="w-6 h-6 text-gray-300 hover:text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-purple-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300">
              500+
            </div>
            <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Happy Customers
            </div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
              1000+
            </div>
            <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Gifts Delivered
            </div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors duration-300">
              4.9★
            </div>
            <div className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              Average Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;