import { useNavigate } from "react-router-dom";

export default function HotelCard({ hotel }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/hotel-booking", { state: { hotel } });
  };

  return (
    <div className="border rounded-lg p-4 shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{hotel.name}</h3>
        <p className="text-gray-600">{hotel.location}</p>
        <p className="text-blue-500 font-bold">${hotel.price}/night</p>
        <p className="text-yellow-500">⭐ {hotel.rating}</p>
      </div>
      <button
        onClick={handleBooking}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Book Now
      </button>
    </div>
  );
}
