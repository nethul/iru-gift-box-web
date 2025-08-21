import { useState} from 'react';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingCart, MessageCircle } from 'lucide-react';
import toblerone_dark from '../assets/Items/toblerone_dark.webp'
import toblerone_light from '../assets/Items/toblerone_light.jpg'
import scented_candle from '../assets/Items/scented_candle.webp'
import teddy_bear from '../assets/Items/teddy_bear.webp'
import birthday_card from '../assets/Items/birthday_card.avif'
import aromatherapy_oil from '../assets/Items/aromatherapy_oil.webp'

interface CustomItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface SelectedItem extends CustomItem {
  quantity: number;
}

const CustomizePage = () => {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const availableItems: CustomItem[] = [
    // Chocolates & Sweets
    { id: 1, name: 'Toblerone - Dark', price: 1250, image: toblerone_dark, category: 'chocolates' },
    { id: 2, name: 'Toblerone - Light', price: 1250, image: toblerone_light, category: 'chocolates' },
    // { id: 3, name: 'Assorted Candy Mix', price: 650, image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'chocolates' },
    // { id: 4, name: 'Traditional Sri Lankan Sweets', price: 850, image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'chocolates' },
    
    // Accessories & Gifts
    { id: 5, name: 'Scented Candle', price: 750, image: scented_candle, category: 'accessories' },
    { id: 6, name: 'Mini Teddy Bear', price: 885, image: teddy_bear, category: 'accessories' },
    // { id: 7, name: 'Photo Frame', price: 450, image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'accessories' },
    { id: 8, name: 'Greeting Cards', price: 350, image: birthday_card, category: 'accessories' },
    
    // Beauty & Care
    { id: 9, name: 'Aromatherapy Oil Set', price: 1350, image: aromatherapy_oil, category: 'beauty' },
    // { id: 10, name: 'Hand Cream Collection', price: 950, image: 'https://images.pexels.com/photos/1029897/pexels-photo-1029897.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty' },
    // { id: 11, name: 'Bath Bomb Set', price: 850, image: 'https://images.pexels.com/photos/1029898/pexels-photo-1029898.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'beauty' },
    
    // Snacks & Treats
    // { id: 12, name: 'Gourmet Cookie Box', price: 750, image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'snacks' },
    // { id: 13, name: 'Dried Fruit Mix', price: 650, image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'snacks' },
    // { id: 14, name: 'Tea Selection Box', price: 1050, image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'snacks' },
  ];

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'chocolates', name: 'Chocolates & Sweets' },
    { id: 'accessories', name: 'Accessories & Gifts' },
    { id: 'beauty', name: 'Beauty & Care' },
    // { id: 'snacks', name: 'Snacks & Treats' },
  ];

  const filteredItems = availableItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addItem = (item: CustomItem) => {
    const existingItem = selectedItems.find(selected => selected.id === item.id);
    if (existingItem) {
      setSelectedItems(prev =>
        prev.map(selected =>
          selected.id === item.id
            ? { ...selected, quantity: selected.quantity + 1 }
            : selected
        )
      );
    } else {
      setSelectedItems(prev => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setSelectedItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setSelectedItems(prev => prev.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleOrder = () => {
    if (selectedItems.length === 0) {
      alert('Please select at least one item to place an order.');
      return;
    }

    const orderDetails = selectedItems.map(item => 
      `• ${item.name} x${item.quantity} - Rs. ${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');

    const message = `Hi! I'd like to order a custom gift box with the following items:\n\n${orderDetails}\n\nTotal: Rs. ${getTotalPrice().toLocaleString()}\n\nCan you help me complete this order?`;
    const whatsappUrl = `https://wa.me/94123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const goBack = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={goBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Customize Your Gift Box
            </h1>
            <div className="text-gray-300">
              {selectedItems.length} items selected
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items Selection */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => {
                const isSelected = selectedItems.some(selected => selected.id === item.id);
                return (
                  <div
                    key={item.id}
                    className={`bg-gray-800 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${
                      isSelected ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-gray-700 hover:border-gray-600'
                    }`}
                    onClick={() => addItem(item)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold mb-2 text-sm">{item.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-400 font-bold">Rs. {item.price.toLocaleString()}</span>
                        {isSelected && (
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                            <Plus className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Your Custom Box
              </h2>

              {selectedItems.length === 0 ? (
                <p className="text-gray-400 text-center py-8">
                  No items selected yet. Click on items to add them to your custom gift box.
                </p>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {selectedItems.map(item => (
                      <div key={item.id} className="bg-gray-700 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-white font-medium text-sm flex-1">{item.name}</h4>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:text-red-300 ml-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center"
                            >
                              <Minus className="w-4 h-4 text-white" />
                            </button>
                            <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center"
                            >
                              <Plus className="w-4 h-4 text-white" />
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="text-purple-400 font-bold">
                              Rs. {(item.price * item.quantity).toLocaleString()}
                            </div>
                            <div className="text-gray-400 text-xs">
                              Rs. {item.price.toLocaleString()} each
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-600 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-white">Total:</span>
                      <span className="text-2xl font-bold text-purple-400">
                        Rs. {getTotalPrice().toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleOrder}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Order via WhatsApp</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizePage;