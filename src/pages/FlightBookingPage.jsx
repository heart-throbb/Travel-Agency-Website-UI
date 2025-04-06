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
        }).then(() => {
          navigate("/");
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
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-8">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {source} → {destination}
            </h2>
            <p className="text-blue-600 text-lg font-semibold">${price}</p>
          </div>
          <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Economy
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 (123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              Departure Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200 mt-6"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
