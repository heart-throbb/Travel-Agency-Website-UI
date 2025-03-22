import React from "react";

export default function FlightCard({ flight, onBookNow }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm mx-auto border border-gray-200 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{flight.airline}</h2>
        <p className="text-gray-700">
          {flight.from} → {flight.to}
        </p>
        <p className="text-blue-600 font-bold">${flight.price}</p>
      </div>
      <button
        onClick={onBookNow}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Book Now
      </button>
    </div>
  );
}
