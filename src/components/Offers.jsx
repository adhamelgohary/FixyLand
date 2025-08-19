import PropTypes from 'prop-types';

const OfferCard = ({ title, discount, backgroundImage }) => (
  <div
    className="relative rounded-lg overflow-hidden shadow-lg text-white p-8 h-80 flex flex-col justify-end items-start group"
    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300"></div>
    <div className="relative z-10">
      <span className="bg-brand-gold text-white font-bold px-3 py-1 rounded-md text-sm mb-4 inline-block">{discount} OFF</span>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <a href="#" className="bg-white text-brand-dark font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
        Book Now &rarr;
      </a>
    </div>
  </div>
);

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export const Offers = () => {
  const offersData = [
    {
      title: 'Get 30% Off on Hotel Booking',
      discount: '30%',
      backgroundImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
    },
    {
      title: 'Get 35% Off on Resort Booking',
      discount: '35%',
      backgroundImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-green font-semibold">SPECIAL OFFERS</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">Special Discount for Hotel & Resort Booking</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offersData.map((offer) => (
            <OfferCard key={offer.title} {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
};