import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 flex justify-between items-center shadow-md bg-white">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold italic font-[Lobster]">
        Travel Agency
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <div
        className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} 
        absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent 
        shadow-md md:shadow-none p-4 md:p-0`}
      >
        <Link
          to="/flights"
          className="block md:inline-block py-2 hover:text-blue-500"
        >
          Flights
        </Link>
        <Link
          to="/hotels"
          className="block md:inline-block py-2 hover:text-blue-500"
        >
          Hotels
        </Link>
        <Link
          to="/transport"
          className="block md:inline-block py-2 hover:text-blue-500"
        >
          Transport
        </Link>
        <Link
          to="/services"
          className="block md:inline-block py-2 hover:text-blue-500"
        >
          Services
        </Link>
        <Link
          to="/booking"
          className="block md:inline-block py-2 hover:text-blue-500"
        >
          Booking
        </Link>

        {/* Buttons: Stacked on mobile, inline on larger screens */}
        <div className="flex flex-col md:flex-row md:space-x-2 mt-2 md:mt-0">
          <Link
            to="/login"
            className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition text-center w-fit mx-auto md:mx-0"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 text-center w-fit mx-auto md:mx-0 mt-2 md:mt-0"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
