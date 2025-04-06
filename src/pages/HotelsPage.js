import React from "react";
import HotelCard from "../components/HotelCard";
import hotelImage from "../assets/hotels.jpeg"; // Update with your image path

const popularHotels = [
  {
    id: 1,
    name: "Hotel Grand",
    location: "New York",
    price: 120,
    rating: 4.5,
    image: "hotel-grand.jpg",
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
  },
  {
    id: 2,
    name: "Beach Resort",
    location: "Miami",
    price: 180,
    rating: 4.8,
    image: "beach-resort.jpg",
    amenities: ["Beachfront", "Free Breakfast", "Gym", "Bar"],
  },
  {
    id: 3,
    name: "Mountain Lodge",
    location: "Aspen",
    price: 220,
    rating: 4.7,
    image: "mountain-lodge.jpg",
    amenities: ["Ski-in/Ski-out", "Hot Tub", "Fireplace", "Restaurant"],
  },
];

export default function HotelsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
        <img
          src={hotelImage}
          alt="Luxury hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 opacity-80"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            Find Your Perfect Stay
          </h1>
          <p className="mt-2 text-lg md:text-xl text-white drop-shadow-md">
            Experience luxury, comfort, and unforgettable memories.
          </p>
        </div>
      </div>

      {/* Tagline Above Search Block */}
      <div className="text-center mb-8">
        <p className="text-2xl font-semibold text-gray-800">
          Book your next dream getaway with us!
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Search Hotels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Location Input */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
              Location
            </label>
            <div className="flex items-center border rounded-lg p-2 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-200">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="City or Hotel"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Check-in Date */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
              Check-in
            </label>
            <div className="flex items-center border rounded-lg p-2 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-200">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <input type="date" className="w-full outline-none" />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
              Check-out
            </label>
            <div className="flex items-center border rounded-lg p-2 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-200">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <input type="date" className="w-full outline-none" />
            </div>
          </div>

          {/* Guests */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
              Guests
            </label>
            <div className="flex items-center border rounded-lg p-2 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-200">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <select className="w-full outline-none bg-transparent">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3-5 Guests</option>
                <option>6+ Guests</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search Hotels
          </button>
        </div>
      </div>

      {/* Popular Hotels */}
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Popular Hotels
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {popularHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
