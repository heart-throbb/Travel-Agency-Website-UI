import React from "react";
import { useNavigate } from "react-router-dom";
import FlightCard from "../components/FlightCard";

const flights = [
  { id: 1, airline: "American Airlines", from: "NYC", to: "LAX", price: 250 },
  {
    id: 2,
    airline: "Delta Airlines",
    from: "Chicago",
    to: "San Francisco",
    price: 300,
  },
];

export default function FlightsPage() {
  const navigate = useNavigate();

  const handleBookNow = (flight) => {
    navigate(
      `/book-flight/${flight.id}?from=${flight.from}&to=${flight.to}&price=${flight.price}`
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Flights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flights.map((flight) => (
          <FlightCard
            key={flight.id}
            flight={flight}
            onBookNow={() => handleBookNow(flight)}
          />
        ))}
      </div>
    </div>
  );
}
