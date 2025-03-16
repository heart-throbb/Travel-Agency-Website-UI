export default function HotelCard({ hotel }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{hotel.name}</h3>
      <p className="text-gray-600">{hotel.location}</p>
      <p className="text-blue-500 font-bold">${hotel.price}/night</p>
      <p className="text-yellow-500">⭐ {hotel.rating}</p>
    </div>
  );
}
