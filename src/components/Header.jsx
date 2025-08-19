import { useState, useEffect } from 'react'; // <-- Import React hooks
import { Link, useLocation } from 'react-router-dom'; // <-- Import useLocation
import { FaSearch, FaBars } from 'react-icons/fa';
import { ThemeToggle } from './ThemeToggle'; 



export const Header = () => {
  // State to track if the user has scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Get the current page location
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pages', path: '#' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Services', path: '#' },
    { name: 'Blog', path: '#' },
    { name: 'Contact', path: '/contact' },
  ];

  // This effect adds a scroll event listener when the component mounts
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user scrolls more than 50px, otherwise false
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the event listener
    window.addEventListener('scroll', handleScroll);

    // This is a cleanup function that removes the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty array means this effect runs only once on mount

  // Determine the header's background class based on conditions
  // It should be transparent ONLY if it's the homepage AND the user has NOT scrolled
  const headerClass = isHomePage && !isScrolled
    ? 'bg-transparent text-white'
    : 'bg-brand-green text-white shadow-md';

  return (
    // We apply the dynamic classes and add a transition for a smooth effect
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerClass}`}>
      {/* Top Bar - Let's make this part of the main header logic */}
      {/* <div className="bg-brand-green/80 text-sm"> ... </div> */}
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">Fixyland</Link>
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="hover:text-brand-gold transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle /> {/* <-- ADD THE TOGGLE BUTTON HERE */}
          <button className="p-2 rounded-full hover:bg-white/20"><FaSearch size={20} /></button>
          <a href="#" className="bg-brand-gold text-white font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition-colors">
            Book Your Stay
          </a>
          <button className="lg:hidden p-2"><FaBars size={24} /></button>
        </div>
      </div>
    </header>
  );
};