import React from 'react';
import { X, ShoppingBag, MessageCircle } from 'lucide-react';

interface GiftItem {
  name: string;
  quantity: number;
}

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  price: string;
  items: GiftItem[];
}

const GiftModal: React.FC<GiftModalProps> = ({ isOpen, onClose, title, image, price, items }) => {
  if (!isOpen) return null;

  const handleOrder = () => {
    const message = `Hi! I'm interested in ordering the "${title}" gift box (${price}). Can you help me with the order?`;
    const whatsappUrl = `https://wa.me/94123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700/50 shadow-2xl">
        {/* Header */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <div className="text-2xl font-bold text-purple-400 mb-6">{price}</div>

          {/* Items List */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <ShoppingBag className="w-6 h-6 text-cyan-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">What's included:</h3>
            </div>
            <div className="space-y-3">
              {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                  <span className="text-gray-200 font-medium">{item.name}</span>
                  <span className="text-purple-400 font-semibold">x{item.quantity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Order Button */}
          <button
            onClick={handleOrder}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Order via WhatsApp</span>
          </button>

          <p className="text-gray-400 text-sm text-center mt-4">
            Click to start a WhatsApp conversation and place your order
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiftModal;