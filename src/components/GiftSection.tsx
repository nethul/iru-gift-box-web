// import React from 'react';
import { useState } from 'react';
import GiftCard from './GiftCard';
import GiftModal from './GiftModal';
import GB1 from '../assets/GiftBoxes/GB1.jpeg';
import GB2 from '../assets/GiftBoxes/GB2.jpg'
import GB3 from '../assets/GiftBoxes/girly.jpg'

interface GiftItem {
  name: string;
  quantity: number;
}

interface Gift {
  id: number;
  image: string;
  title: string;
  description: string;
  color: string;
  price: string;
  items: GiftItem[];
}

const GiftSection = () => {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gifts: Gift[] = [
    {
      id: 1,
      image: GB1,
      title: 'Birthday Surprise',
      description: 'Make their birthday extra special with a surprise gift box filled with curated treats and memorable keepsakes.',
      color: 'bg-gradient-to-br from-pink-600 to-purple-700',
      price: 'Rs. 6,325.00',
      items: [
        { name: 'Premium Chocolate Box', quantity: 1 },
        { name: 'Birthday Greeting Card', quantity: 1 },
        { name: 'Scented Candle', quantity: 2 },
        { name: 'Mini Teddy Bear', quantity: 1 },
        { name: 'Celebration Confetti', quantity: 1 },
        { name: 'Photo Frame', quantity: 1 }
      ]
    },
    {
      id: 2,
      image: GB2,
      title: 'Sweet Treats',
      description: 'Delight your loved ones with an assortment of premium sweets, chocolates, and confections.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      price: 'Rs. 6,040.00',
      items: [
        { name: 'Assorted Chocolates', quantity: 1 },
        { name: 'Traditional Sweets Pack', quantity: 1 },
        { name: 'Honey Cookies', quantity: 2 },
        { name: 'Fruit Gummies', quantity: 1 },
        { name: 'Caramel Candies', quantity: 1 },
        { name: 'Sweet Treats Card', quantity: 1 }
      ]
    },
    {
      id: 3,
      image: GB3,
      title: 'Love & Care',
      description: 'Express your love and care with thoughtfully selected items that show how much they mean to you.',
      color: 'bg-gradient-to-br from-purple-600 to-pink-700',
      price: 'Rs. 4,770.00',
      items: [
        { name: 'Heart-shaped Chocolates', quantity: 1 },
        { name: 'Love Note Cards', quantity: 3 },
        { name: 'Rose Petals', quantity: 1 },
        { name: 'Aromatherapy Oil', quantity: 1 },
        { name: 'Silk Ribbon', quantity: 2 },
        { name: 'Care Package Note', quantity: 1 }
      ]
    }
  ];

  const handleShowDetails = (gift: Gift) => {
    setSelectedGift(gift);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedGift(null);
  };

  return (
    <section id="gifts" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Gift Boxes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our carefully curated selection of gift boxes, each designed to create magical moments and lasting memories for your loved ones in Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {gifts.map((gift) => (
            <GiftCard
              key={gift.id}
              image={gift.image}
              title={gift.title}
              description={gift.description}
              color={gift.color}
              price={gift.price}
              onShowDetails={() => handleShowDetails(gift)}
            />
          ))}
        </div>

        {selectedGift && (
          <GiftModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title={selectedGift.title}
            image={selectedGift.image}
            price={selectedGift.price}
            items={selectedGift.items}
          />
        )}
      </div>
    </section>
  );
};

export default GiftSection;