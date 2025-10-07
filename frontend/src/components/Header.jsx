import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Dental Clinic</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-200">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
            <li><Link to="/booking" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">Book Appointment</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;