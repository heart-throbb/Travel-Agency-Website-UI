import React from "react";

const toursData = [
  {
    id: 1,
    name: "City Landmarks Tour",
    price: "$80",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Historical Sites Tour",
    price: "$100",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Nature & Adventure Tour",
    price: "$120",
    image: "https://via.placeholder.com/150",
  },
];

export default function GuidedTours() {
  return (
    <div className="min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Available Guided Tours
      </h1>
      <p className="text-gray-600 text-center mt-2">
        Select a guided tour for an unforgettable experience.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {toursData.map((tour) => (
          <div
            key={tour.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <img
              src={tour.image}
              alt={tour.name}
              className="w-32 h-32 mx-auto rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-blue-600 mt-4">
              {tour.name}
            </h2>
            <p className="text-gray-600">{tour.price}</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
