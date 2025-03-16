export default function FlightCard({ flight }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{flight.airline}</h3>
      <p className="text-gray-600">
        {flight.departure} → {flight.arrival}
      </p>
      <p className="text-blue-500 font-bold">${flight.price}</p>
    </div>
  );
}
