import { FaCheckCircle } from 'react-icons/fa';

export const About = () => {
  const features = [
    "24-Hours Emergency Service",
    "It is a Long Established fact",
    "Comfortable Atmosphere",
    "Flexible and Cost-Effective",
    "Something by accident",
    "Get Free Consultation Anytime",
  ];

  return (
    <section className="py-24 pt-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <img src="https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop" alt="Hotel Lobby" className="rounded-lg shadow-2xl w-full" />
            <div className="absolute -left-8 -bottom-8 bg-brand-green text-white p-6 rounded-full w-48 h-48 flex items-center justify-center text-center font-bold text-xl transform -rotate-12">
              30 YEARS OF BUSINESS EXPERIENCE
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-brand-green font-semibold">ABOUT FIXYLAND</span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-gray-900 dark:text-white">World Class Luxury Hotel and Resort Near City</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center">
                  <FaCheckCircle className="text-brand-green mr-3" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <img src="https://i.pravatar.cc/80?u=ceo" alt="CEO" className="w-20 h-20 rounded-full mr-4 border-4 border-white dark:border-gray-800 shadow-md" />
              <div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white">Robert L. Robinson</h4>
                <p className="text-gray-500 dark:text-gray-400">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};