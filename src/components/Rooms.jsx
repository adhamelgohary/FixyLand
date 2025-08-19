import PropTypes from 'prop-types';
import { FaUserFriends, FaBed, FaBath } from 'react-icons/fa';
import { motion } from 'framer-motion';

const roomsData = [
  { name: 'Deluxe Rooms', price: 800, image: 'https://images.unsplash.com/photo-1590490359853-29562931a28a?q=80&w=1974&auto=format&fit=crop', guests: 2, beds: 2, baths: 1, description: 'A spacious room with a beautiful view.' },
  { name: 'Junior Rooms', price: 400, image: 'https://images.unsplash.com/photo-1560185893-a55de85cf0db?q=80&w=2070&auto=format&fit=crop', guests: 2, beds: 1, baths: 1, description: 'A cozy and modern room for a comfortable stay.' },
  { name: 'Family Rooms', price: 600, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop', guests: 2, beds: 2, baths: 1, description: 'Perfect for families, with ample space and amenities.' },
  { name: 'Single Rooms', price: 750, image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop', guests: 1, beds: 1, baths: 1, description: 'Ideal for solo travelers seeking comfort and style.' },
];

const RoomCard = ({ name, price, image, guests, beds, baths, description }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group flex flex-col h-full"
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative">
      <img src={image} alt={name} className="w-full h-60 object-cover" />
      <div className="absolute top-4 left-4 bg-brand-green text-white px-3 py-1 rounded-md text-sm">${price} / Night</div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{name}</h3>
      <div className="flex items-center text-gray-600 dark:text-gray-300 space-x-4 mb-4">
        <span className="flex items-center"><FaUserFriends className="mr-2 text-brand-green"/> {guests} Guests</span>
        <span className="flex items-center"><FaBed className="mr-2 text-brand-green"/> {beds} Beds</span>
        <span className="flex items-center"><FaBath className="mr-2 text-brand-green"/> {baths} Bath</span>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-4 flex-grow">{description}</p>
      <a href="#" className="font-semibold text-brand-green hover:text-brand-green-dark mt-auto">Read More &rarr;</a>
    </div>
  </motion.div>
);

RoomCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  guests: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
  baths: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export const Rooms = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-800/20">
      <div className="container mx-auto px-4 text-center">
        <span className="text-brand-green font-semibold">ROOM TYPE</span>
        <h2 className="text-4xl font-bold mt-2 mb-12 text-gray-900 dark:text-white">The Best Luxury Rooms And Suites</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {roomsData.map((room) => (
            <motion.div key={room.name} variants={itemVariants}>
              <RoomCard {...room} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};