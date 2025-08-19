import PropTypes from 'prop-types';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NewsCard = ({ category, image, date, author, title, excerpt }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group h-full"
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <span className="absolute top-4 left-4 bg-brand-green text-white px-3 py-1 rounded-md text-sm capitalize">{category}</span>
    </div>
    <div className="p-6">
      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
        <span className="flex items-center"><FaCalendarAlt className="mr-2 text-brand-green" /> {date}</span>
        <span className="flex items-center"><FaUser className="mr-2 text-brand-green" /> {author}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-brand-green transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
      <a href="#" className="font-semibold text-brand-green hover:text-brand-green-dark">Read More &rarr;</a>
    </div>
  </motion.div>
);

NewsCard.propTypes = {
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export const News = () => {
  const newsData = [
    { category: 'Hotel', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbb5b9?q=80&w=2070&auto=format&fit=crop', date: 'January 16, 2024', author: 'Admin', title: 'Most Expensive Hotel Rooms In New York', excerpt: 'Perspiciatis omniste voluptu ditae accusan tiume doloremque laudantium, totam aperiam.' },
    { category: 'Room', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop', date: 'January 16, 2024', author: 'Admin', title: 'Our New Miami Beach Hotel Is Open', excerpt: 'Perspiciatis omniste voluptu ditae accusan tiume doloremque laudantium, totam aperiam.' },
    { category: 'Resort', image: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ec4?q=80&w=2070&auto=format&fit=crop', date: 'January 16, 2024', author: 'Admin', title: 'Guests Offers Exclusive Facilities To Services', excerpt: 'Perspiciatis omniste voluptu ditae accusan tiume doloremque laudantium, totam aperiam.' },
  ];

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
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-green font-semibold">HOTEL NEWS</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-900 dark:text-white">Get More Update For Fixyland</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {newsData.map((post) => (
            <motion.div key={post.title} variants={itemVariants}>
              <NewsCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};