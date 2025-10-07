import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-teal-900/60 backdrop-blur-lg border border-teal-700/30 shadow-2xl rounded-2xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white drop-shadow-lg">Dental Clinic</Link>
        <nav>
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-white hover:text-teal-200 transition-colors duration-300 font-medium">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-teal-200 transition-colors duration-300 font-medium">About Us</Link></li>
            <li><Link to="/services" className="text-white hover:text-teal-200 transition-colors duration-300 font-medium">Services</Link></li>
            <li><Link to="/contact" className="text-white hover:text-teal-200 transition-colors duration-300 font-medium">Contact</Link></li>
            <li><Link to="/booking" className="bg-white text-teal-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">Book Appointment</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;