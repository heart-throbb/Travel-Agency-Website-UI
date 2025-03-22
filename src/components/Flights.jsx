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
  const [bookings, setBookings] = useState([]);

  const handleBookFlight = (flight) => {
    const newBooking = {
      ...flight,
      date: new Date().toISOString().split("T")[0],
    };
    setBookings([...bookings, newBooking]);
    localStorage.setItem(
      "bookedFlights",
      JSON.stringify([...bookings, newBooking])
    );
    alert("Flight booked successfully!");
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Flights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {flights.map((flight) => (
          <FlightCard
            key={flight.id}
            flight={flight}
            onBookNow={handleBookFlight}
          />
        ))}
      </div>
    </div>
  );
}
