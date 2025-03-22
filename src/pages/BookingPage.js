import React, { useEffect, useState } from "react";

export default function BookingPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("flightBookings")) || [];
    setBookings(storedBookings);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Bookings</h1>

      {bookings.length > 0 ? (
        <ul className="mt-3">
          {bookings.map((booking, index) => (
            <li key={index} className="bg-gray-100 p-4 mb-2 rounded-md">
              <span className="font-bold">{booking.airline}:</span>{" "}
              {booking.departure} → {booking.arrival}
              <span className="block text-gray-500">Date: {booking.date}</span>
              <span className="block text-gray-500">
                Passengers: {booking.passengers}
              </span>
              <span className="block text-gray-500">
                Booked by: {booking.fullName}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No bookings found.</p>
      )}
    </div>
  );
}
