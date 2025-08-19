import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Rooms } from '../components/Rooms';
import { Offers } from '../components/Offers';
import { News } from '../components/News';
import { Reveal } from '../components/Reveal';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <div className="bg-brand-green-dark text-white py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-8 text-xl font-semibold">Luxury Hotel</span> •
          <span className="mx-8 text-xl font-semibold">Hotel & Resort</span> •
          <span className="mx-8 text-xl font-semibold">Holiday Booking</span> •
          <span className="mx-8 text-xl font-semibold">Relax & Enjoy</span> •
          <span className="mx-8 text-xl font-semibold">Luxury Hotel</span> •
          <span className="mx-8 text-xl font-semibold">Hotel & Resort</span> •
          <span className="mx-8 text-xl font-semibold">Holiday Booking</span> •
          <span className="mx-8 text-xl font-semibold">Relax & Enjoy</span>
        </div>
      </div>
      <Reveal>
        <Rooms />
      </Reveal>
      <Reveal>
        <Offers />
      </Reveal>
      <Reveal>
        <News />
      </Reveal>
    </>
  );
};