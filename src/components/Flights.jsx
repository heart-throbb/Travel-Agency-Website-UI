import { useState } from "react";
import FlightCard from "./FlightCard";

const flightsData = [
  {
    id: 1,
    airline: "American Airlines",
    departure: "NYC",
    arrival: "LAX",
    price: 250,
  },
  {
    id: 2,
    airline: "Delta Airlines",
    departure: "Chicago",
    arrival: "San Francisco",
    price: 300,
  },
];

export default function Flights() {
  const [flights] = useState(flightsData);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Flights</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
}
