import React from 'react';
import GiftCard from './GiftCard';
import GB1 from '../assets/GiftBoxes/GB1.jpeg';
import GB2 from '../assets/GiftBoxes/GB2.jpg'
import GB3 from '../assets/GiftBoxes/girly.jpg'

const GiftSection = () => {
  const gifts = [
    {
      id: 1,
      image: GB1,
      title: 'Birthday Surprise',
      description: 'Make their birthday extra special with a surprise gift box filled with curated treats and memorable keepsakes.',
      color: 'bg-gradient-to-br from-pink-600 to-purple-700',
      price: 'Rs. 6,325.00'
    },
    {
      id: 2,
      image: GB2,
      title: 'Sweet Treats',
      description: 'Delight your loved ones with an assortment of premium sweets, chocolates, and confections.',
      color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
      price: 'Rs. 6,040.00'
    },
    {
      id: 3,
      image: GB3,
      title: 'Love & Care',
      description: 'Express your love and care with thoughtfully selected items that show how much they mean to you.',
      color: 'bg-gradient-to-br from-purple-600 to-pink-700',
      price: 'Rs. 4,770.00'
    }
    // {
    //   id: 4,
    //   image: '💝',
    //   title: 'Love & Care',
    //   description: 'Express your love and care with thoughtfully selected items that show how much they mean to you.',
    //   color: 'bg-gradient-to-br from-pink-500 to-red-600',
    //   price: 'Rs. 10,030.00'
    // },
    // {
    //   id: 5,
    //   image: '🌺',
    //   title: 'Floral Delight',
    //   description: 'Beautiful arrangement of fresh flowers combined with complementary gifts to create a memorable experience.',
    //   color: 'bg-gradient-to-br from-green-500 to-teal-600',
    //   price: 'Rs. 8,500.00'
    // },
    // {
    //   id: 6,
    //   image: '🎊',
    //   title: 'Festival Special',
    //   description: 'Celebrate traditional festivals with specially curated boxes featuring cultural items and festive treats.',
    //   color: 'bg-gradient-to-br from-orange-500 to-red-600',
    //   price: 'Rs. 7,200.00'
    // }
  ];

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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSection;