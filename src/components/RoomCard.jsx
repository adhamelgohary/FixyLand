import PropTypes from 'prop-types';
import { FaUserFriends, FaBed, FaBath } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const RoomCard = ({ room, onBook }) => {
  const { name, price, image, guests, beds, baths, description } = room;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
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
        <button
          onClick={() => onBook(room)}
          className="w-full mt-auto bg-brand-green text-white font-bold py-3 px-4 rounded-md hover:bg-brand-green-dark transition-colors"
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

RoomCard.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    guests: PropTypes.number.isRequired,
    beds: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onBook: PropTypes.func.isRequired,
};