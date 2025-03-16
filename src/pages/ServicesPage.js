import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800">Luxury Services</h1>
      <p className="text-gray-600 mt-2">
        Experience the best with our premium services.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Chauffeur Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-600">
            Chauffeur Service
          </h2>
          <p className="text-gray-600 mt-2">
            Enjoy a premium ride with our professional chauffeur service.
          </p>

          <Link to="/chauffeurs">
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Book Now
            </button>
          </Link>
        </div>

        {/* Guided Tours */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-600">Guided Tours</h2>
          <p className="text-gray-600 mt-2">
            Explore the city with our expert guides on a comfortable tour.
          </p>
          <Link to="/guided-tours">
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
