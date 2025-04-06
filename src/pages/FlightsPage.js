import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlightCard from "../components/FlightCard";
import flightsImage from "../assets/flights.jpeg";

const popularFlights = [
  {
    id: 1,
    airline: "American Airlines",
    from: "New York (JFK)",
    to: "Los Angeles (LAX)",
    price: 250,
    duration: "3h 45m",
    departureTime: "08:00 AM",
  },
  {
    id: 2,
    airline: "Delta Airlines",
    from: "Chicago (ORD)",
    to: "San Francisco (SFO)",
    price: 300,
    duration: "2h 45m",
    departureTime: "10:30 AM",
  },
  {
    id: 3,
    airline: "Emirates",
    from: "Dubai (DXB)",
    to: "London (LHR)",
    price: 800,
    duration: "5h 15m",
    departureTime: "02:15 PM",
  },
];

export default function FlightsPage() {
  const navigate = useNavigate();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [filteredFlights, setFilteredFlights] = useState([]);

  // For demonstration, we assume popularFlights are also our full flight list.
  const flights = popularFlights;

  const handleSearch = () => {
    const results = flights.filter(
      (flight) =>
        flight.from.toLowerCase().includes(from.toLowerCase()) &&
        flight.to.toLowerCase().includes(to.toLowerCase()) &&
        (date === "" || flight.date === date)
    );
    setFilteredFlights(results);
  };

  const handleBookNow = (flight) => {
    navigate(
      `/book-flight/${flight.id}?from=${flight.from}&to=${flight.to}&price=${flight.price}`
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="relative h-64 mb-8 rounded-xl overflow-hidden">
        <img
          src={flightsImage}
          alt="Airplane flying"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 opacity-80"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            Explore the World
          </h1>
          <p className="mt-2 text-lg md:text-xl text-white drop-shadow-md">
            Find and book your perfect flight to any destination around the
            globe.
          </p>
        </div>
      </div>

      {/* Tagline Above Search */}
      <div className="text-center mb-8">
        <p className="text-2xl font-semibold text-gray-800">
          Find the perfect flight for your next adventure!
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Search Flights:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="From (e.g., NYC)"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="To (e.g., LAX)"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200 flex items-center"
          >
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
            Search Flights
          </button>
        </div>
      </div>

      {/* Display Results or Popular Flights */}
      {from || to || date ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Search Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredFlights.length > 0 ? (
              filteredFlights.map((flight) => (
                <FlightCard
                  key={flight.id}
                  flight={flight}
                  onBookNow={() => handleBookNow(flight)}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">No flights found.</p>
            )}
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Popular Flights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularFlights.map((flight) => (
              <FlightCard
                key={flight.id}
                flight={flight}
                onBookNow={() => handleBookNow(flight)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
