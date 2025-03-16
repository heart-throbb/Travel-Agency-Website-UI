import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BookingPage() {
  const [user, setUser] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [filteredBookings, setFilteredBookings] = useState({
    past: [],
    present: [],
    future: [],
  });

  // Mock User (Replace this when integrating authentication)
  useEffect(() => {
    const mockUser = { id: "123", name: "John Doe" }; // Fake logged-in user
    setUser(mockUser);

    if (mockUser) {
      fetchMockBookings();
    }
  }, []);

  // Mock Booking Data
  const fetchMockBookings = () => {
    const today = new Date().toISOString().split("T")[0];

    const mockBookings = [
      { id: 1, serviceType: "Hotel", hotel: "Marriott", date: "2024-03-05" }, // Past
      { id: 2, serviceType: "Chauffeur", transport: "Luxury Car", date: today }, // Present
      {
        id: 3,
        serviceType: "Guided Tour",
        location: "Paris",
        date: "2024-06-20",
      }, // Future
    ];

    // Categorizing the bookings
    const past = mockBookings.filter((b) => b.date < today);
    const present = mockBookings.filter((b) => b.date === today);
    const future = mockBookings.filter((b) => b.date > today);

    setFilteredBookings({ past, present, future });
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          onClick={() => setShowLoginPopup(true)}
        >
          View Bookings
        </button>

        {/* Pop-up Message */}
        {showLoginPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h2 className="text-lg font-semibold text-gray-800">
                You must log in to view your bookings
              </h2>
              <div className="mt-4 flex justify-end">
                <Link
                  to="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Login
                </Link>
                <button
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                  onClick={() => setShowLoginPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Bookings</h1>

      {/* Past Bookings */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Past Bookings</h2>
        {filteredBookings.past.length > 0 ? (
          <ul className="mt-3">
            {filteredBookings.past.map((booking) => (
              <li key={booking.id} className="bg-gray-100 p-4 mb-2 rounded-md">
                <span className="font-bold">{booking.serviceType}:</span>{" "}
                {booking.hotel || booking.transport || booking.location}
                <span className="block text-gray-500">
                  Date: {booking.date}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No past bookings.</p>
        )}
      </section>

      {/* Present Bookings */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Today's Bookings
        </h2>
        {filteredBookings.present.length > 0 ? (
          <ul className="mt-3">
            {filteredBookings.present.map((booking) => (
              <li key={booking.id} className="bg-gray-100 p-4 mb-2 rounded-md">
                <span className="font-bold">{booking.serviceType}:</span>{" "}
                {booking.hotel || booking.transport || booking.location}
                <span className="block text-gray-500">
                  Date: {booking.date}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No bookings for today.</p>
        )}
      </section>

      {/* Future Bookings */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700">
          Upcoming Bookings
        </h2>
        {filteredBookings.future.length > 0 ? (
          <ul className="mt-3">
            {filteredBookings.future.map((booking) => (
              <li key={booking.id} className="bg-gray-100 p-4 mb-2 rounded-md">
                <span className="font-bold">{booking.serviceType}:</span>{" "}
                {booking.hotel || booking.transport || booking.location}
                <span className="block text-gray-500">
                  Date: {booking.date}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No upcoming bookings.</p>
        )}
      </section>
    </div>
  );
}
