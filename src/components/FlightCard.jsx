import React from "react";

export default function FlightCard({ flight, onBookNow }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{flight.airline}</h3>
      <div className="flex justify-between mb-4">
        <div>
          <p className="font-medium">{flight.from}</p>
          <p className="text-gray-500 text-sm">{flight.departureTime}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">{flight.duration}</p>
          <div className="w-16 h-px bg-gray-300 my-2 mx-auto"></div>
        </div>
        <div>
          <p className="font-medium">{flight.to}</p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t">
        <p className="text-2xl font-bold text-blue-600">${flight.price}</p>
        <button
          onClick={onBookNow}
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-md transition duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
