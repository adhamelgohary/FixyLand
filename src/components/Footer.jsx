import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Fixyland</h3>
            <p className="mb-4">Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus maxime placeat facere.</p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center hover:bg-brand-green"><FaFacebookF /></a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center hover:bg-brand-green"><FaTwitter /></a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center hover:bg-brand-green"><FaInstagram /></a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-md flex items-center justify-center hover:bg-brand-green"><FaLinkedinIn /></a>
            </div>
          </div>
          
          {/* Explore */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">EXPLORE</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Hotel</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Hotel Staff</a></li>
              <li><a href="#" className="hover:text-white">Latest News</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">CONTACT</h4>
            <p className="mb-2">7631 Salina Park, 115 Devon Isle, Louisiana, USA</p>
            <p className="mb-2">(+1) 987 654 3210</p>
            <p>info@domain.com</p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">NEWSLETTER</h4>
            <div className="relative mb-4">
              <input type="email" placeholder="Ex: info@domain.com" className="w-full bg-gray-700 p-3 rounded-md text-white focus:outline-none" />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white">&rarr;</button>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">I agree to all terms and policies</label>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm flex justify-between">
          <p>© Copyright 2025 Fixyland, All Rights Reserved.</p>
          <div>
            <a href="#" className="mr-4 hover:text-white">Terms and Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};