import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function FlightBookingPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract query parameters from URL
  const params = new URLSearchParams(location.search);
  const source = params.get("from");
  const destination = params.get("to");
  const price = params.get("price");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate if all fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields before confirming!",
      });
      return;
    }

    // Get today's date (formatted as YYYY-MM-DD)
    const today = new Date().toISOString().split("T")[0];

    // Check if the selected date is in the past
    if (formData.date < today) {
      Swal.fire({
        icon: "error",
        title: "Invalid Date!",
        text: "The departure date cannot be in the past. Please select a valid date.",
      });
      return;
    }

    // Show confirmation prompt
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to book a flight from ${source} to ${destination} on ${formData.date}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book it!",
      cancelButtonText: "No, Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, show success alert
        Swal.fire({
          title: "Flight Booked Successfully! ✈️",
          html: `
            <b>${source} → ${destination}</b> <br>
            📅 <b>Departure Date:</b> ${formData.date} <br>
            💰 <b>Ticket Price:</b> $${price} <br>
            🛫 <b>Passenger Name:</b> ${formData.name}
          `,
          icon: "success",
          confirmButtonColor: "#28a745",
          confirmButtonText: "Awesome!",
        });
      } else {
        // If canceled, show cancellation message
        Swal.fire({
          icon: "info",
          title: "Booking Cancelled",
          text: "Your flight booking was not completed.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Okay",
        });
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800">
          {source} → {destination}
        </h2>
        <p className="text-blue-600 text-lg font-semibold">${price}</p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700">
              Departure Date:
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
