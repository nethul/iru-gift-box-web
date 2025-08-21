import React from 'react';

interface GiftCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  color: string;
  onShowDetails: () => void;
}

const GiftCard: React.FC<GiftCardProps> = ({ image, title, description, price, color, onShowDetails }) => {
  return (
    <div className="group bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col">
      {/* Full-size Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300 text-center drop-shadow">
          {title}
        </h3>
        <p className="text-gray-200 text-base mb-4 leading-relaxed text-center group-hover:text-gray-100 transition-colors duration-300">
          {description}
        </p>
        <div className="text-xl font-bold text-purple-400 mb-6 text-center drop-shadow">
          {price}
        </div>
        <button 
          onClick={onShowDetails}
          className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-auto"
        >
          What's inside
        </button>
      </div>
    </div>
  );
};

export default GiftCard;