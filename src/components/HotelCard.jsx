import React from "react";
import { useNavigate } from "react-router-dom";

export default function HotelCard({ hotel }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/hotel-booking", { state: { hotel } });
  };

  return (
    <div className="bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100">
      <div className="relative h-40 md:h-48 mb-3 md:mb-4 rounded-lg overflow-hidden">
        <img
          src={`https://source.unsplash.com/random/400x300/?hotel,${hotel.name
            .split(" ")
            .join(",")}`}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 md:p-4">
          <h3 className="text-lg md:text-xl font-bold text-white">
            {hotel.name}
          </h3>
          <p className="text-blue-200 text-sm md:text-base">{hotel.location}</p>
        </div>
        <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 font-bold px-2 py-1 rounded-md text-xs md:text-sm">
          ⭐ {hotel.rating}
        </div>
      </div>

      <div className="mb-3 md:mb-4">
        <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-3">
          {hotel.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
          {hotel.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              +{hotel.amenities.length - 3} more
            </span>
          )}
        </div>

        <p className="text-xl md:text-2xl font-bold text-blue-600 mb-1 md:mb-2">
          ${hotel.price}
          <span className="text-xs md:text-sm font-normal text-gray-500">
            {" "}
            / night
          </span>
        </p>
      </div>

      {/* Updated Book Now Button: same shape as FlightCard button */}
      <button
        onClick={handleBooking}
        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-md transition duration-200"
      >
        Book Now
      </button>
    </div>
  );
}
