import { useNavigate } from "react-router-dom";

export default function TransportCard({ transport }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/book-transport", { state: { transport } });
  };

  return (
    <div className="border rounded-lg p-4 shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{transport.type}</h3>
        <p className="text-gray-600">Company: {transport.company}</p>
        <p className="text-blue-500 font-bold">${transport.price}/hour</p>
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
