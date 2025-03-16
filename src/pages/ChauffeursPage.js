import React from "react";

const chauffeursData = [
  {
    id: 1,
    name: "John Doe",
    rate: "$50/hour",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Michael Smith",
    rate: "$45/hour",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Emma Brown",
    rate: "$55/hour",
    image: "https://via.placeholder.com/150",
  },
];

export default function Chauffeurs() {
  return (
    <div className="min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Available Chauffeurs
      </h1>
      <p className="text-gray-600 text-center mt-2">
        Select a chauffeur for your premium ride.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {chauffeursData.map((chauffeur) => (
          <div
            key={chauffeur.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <img
              src={chauffeur.image}
              alt={chauffeur.name}
              className="w-32 h-32 mx-auto rounded-full"
            />
            <h2 className="text-2xl font-semibold text-blue-600 mt-4">
              {chauffeur.name}
            </h2>
            <p className="text-gray-600">{chauffeur.rate}</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
