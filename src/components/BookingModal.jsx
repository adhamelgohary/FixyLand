import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

export const BookingModal = ({ room, onClose }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!room) return null;

  const handleConfirm = (e) => {
    e.preventDefault();
    // In a real app, you would process the form data here
    console.log("Booking confirmed for:", room.name);
    setIsConfirmed(true);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
          <FaTimes size={24} />
        </button>
        
        {isConfirmed ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-green mb-4">Success!</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
              Your booking for the <strong>{room.name}</strong> has been confirmed. A confirmation email has been sent.
            </p>
            <button onClick={onClose} className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-md hover:bg-brand-green-dark">
              Close
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Book Your Stay</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">You are booking the <strong className="text-brand-green">{room.name}</strong> for <strong>${room.price}</strong>/night.</p>
            <form onSubmit={handleConfirm}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Check-in</label>
                  <input type="date" required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Check-out</label>
                  <input type="date" required className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Guests</label>
                <select defaultValue="2" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-md hover:bg-brand-green-dark">
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

BookingModal.propTypes = {
  room: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};