import { FaCalendarAlt } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Book With Best <br /> Luxury Hotel
        </h1>
        <p className="max-w-xl mb-8 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rhoncus nunc. Duis egestas ac ante sed tincidunt.
        </p>
        <div className="flex space-x-4">
          <button className="bg-brand-gold px-8 py-3 rounded-md font-semibold hover:bg-yellow-600 transition-colors">Explore More</button>
          <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">Our Services</button>
        </div>
      </div>
      
      {/* Booking Form */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-20">
        <div className="bg-brand-green p-6 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
          <div className="md:col-span-1">
            <label className="block text-white text-sm font-semibold mb-2">Check In</label>
            <div className="relative">
              <input type="text" placeholder="Select Date" className="w-full p-3 rounded-md" />
              <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="md:col-span-1">
            <label className="block text-white text-sm font-semibold mb-2">Check Out</label>
            <div className="relative">
              <input type="text" placeholder="Select Date" className="w-full p-3 rounded-md" />
              <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="md:col-span-1">
            <label className="block text-white text-sm font-semibold mb-2">Room</label>
            <select className="w-full p-3 rounded-md">
              <option>Room 1</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <label className="block text-white text-sm font-semibold mb-2">Adults</label>
            <select className="w-full p-3 rounded-md">
              <option>2 Adults</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <label className="block text-white text-sm font-semibold mb-2">Children</label>
            <select className="w-full p-3 rounded-md">
              <option>0 Children</option>
            </select>
          </div>
          <button className="bg-brand-gold text-white font-bold p-3 rounded-md h-full md:col-span-1">Check Now</button>
        </div>
      </div>
    </div>
  );
};