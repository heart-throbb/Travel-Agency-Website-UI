import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

export default function HotelBookingPage() {
  const location = useLocation();
  const hotel = location.state?.hotel;

  // State for user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.checkIn ||
      !formData.checkOut
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields before confirming!",
      });
      return;
    }

    Swal.fire({
      title: "Booking Confirmed!",
      html: `
        <b>${hotel.name}</b><br>
        📍 ${hotel.location} <br>
        🏨 <b>Stay From:</b> ${formData.checkIn} <br>
        🏨 <b>Stay To:</b> ${formData.checkOut} <br>
        💰 <b>Total Cost:</b> $${calculateTotalCost(
          hotel.price,
          formData.checkIn,
          formData.checkOut
        )}
      `,
      icon: "success",
      confirmButtonColor: "#28a745",
      confirmButtonText: "Great!",
    });
  };
  const calculateTotalCost = (pricePerNight, checkIn, checkOut) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.max(
      1,
      Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    );
    return nights * pricePerNight;
  };
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Hotel Booking</h2>
      {hotel ? (
        <div className="border rounded-lg p-6 shadow-lg max-w-lg mx-auto">
          <h3 className="text-2xl font-semibold">{hotel.name}</h3>
          <p className="text-gray-600">{hotel.location}</p>
          <p className="text-blue-500 font-bold">${hotel.price}/night</p>
          <p className="text-yellow-500">⭐ {hotel.rating}</p>

          {/* Booking Form */}
          <form className="mt-4 space-y-4" onSubmit={handleBooking}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
            <label className="block">Check-In Date:</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
            <label className="block">Check-Out Date:</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      ) : (
        <p className="text-red-500">No hotel selected.</p>
      )}
    </div>
  );
}
