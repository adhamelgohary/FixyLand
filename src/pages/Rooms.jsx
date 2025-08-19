import { useState, useMemo } from 'react';
import { RoomCard } from '../components/RoomCard';
import { BookingModal } from '../components/BookingModal';
import { AnimatePresence, motion } from 'framer-motion';

const allRoomsData = [
  { name: 'Deluxe Ocean View', price: 800, image: 'https://images.unsplash.com/photo-1590490359853-29562931a28a?q=80&w=1974&auto=format&fit=crop', guests: 2, beds: 1, baths: 1, description: 'Enjoy breathtaking ocean views from your private balcony. Perfect for a romantic getaway.', category: 'Couples' },
  { name: 'Junior Garden Suite', price: 450, image: 'https://images.unsplash.com/photo-1560185893-a55de85cf0db?q=80&w=2070&auto=format&fit=crop', guests: 2, beds: 1, baths: 1, description: 'A cozy suite with a beautiful garden view, offering peace and tranquility.', category: 'Couples' },
  { name: 'Grand Family Room', price: 650, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop', guests: 4, beds: 2, baths: 2, description: 'Spacious and comfortable, this room is ideal for families seeking a memorable vacation.', category: 'Family' },
  { name: 'Classic Single Room', price: 300, image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop', guests: 1, beds: 1, baths: 1, description: 'Elegantly designed for the solo traveler, combining comfort and style.', category: 'Solo' },
  { name: 'Presidential Suite', price: 2500, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop', guests: 4, beds: 2, baths: 2, description: 'The pinnacle of luxury with a separate living area, dining room, and panoramic city views.', category: 'Family' },
  { name: 'Honeymoon Villa', price: 1200, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop', guests: 2, beds: 1, baths: 1, description: 'A private villa with its own pool, perfect for creating unforgettable memories.', category: 'Couples' },
];

const filterCategories = ['All', 'Solo', 'Couples', 'Family'];

export const RoomsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredRooms = useMemo(() => {
    if (activeFilter === 'All') {
      return allRoomsData;
    }
    return allRoomsData.filter(room => room.category === activeFilter);
  }, [activeFilter]);

  const handleOpenBookingModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">Our Rooms & Suites</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find the perfect accommodation for your stay. Filter by your needs and book your dream room today.
          </p>
        </div>
        
        <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-12">
          {filterCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 md:px-6 md:py-3 font-semibold rounded-full transition-colors duration-300 ${
                activeFilter === category 
                ? 'bg-brand-green text-white' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredRooms.map((room) => (
              <motion.div
                key={room.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <RoomCard room={room} onBook={handleOpenBookingModal} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {isModalOpen && (
        <BookingModal room={selectedRoom} onClose={handleCloseBookingModal} />
      )}
    </>
  );
};