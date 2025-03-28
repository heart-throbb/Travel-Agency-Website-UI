import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

export default function TransportBookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const transport = location.state?.transport;

  // State for user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hours: "",
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
      !formData.hours
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields before confirming!",
      });
      return;
    }

    Swal.fire({
      title: "Confirm Booking?",
      text: `Do you want to book ${transport.type} from ${transport.company} for ${formData.hours} hours?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Book It!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Booking Confirmed!",
          html: `
            🚗 <b>${transport.type}</b> - ${transport.company} <br>
            🕒 <b>Duration:</b> ${formData.hours} hours <br>
            💰 <b>Total Cost:</b> $${calculateTotalCost(
              transport.price,
              formData.hours
            )}
          `,
          icon: "success",
          confirmButtonColor: "#28a745",
          confirmButtonText: "Great!",
        });

        // Navigate back after confirmation (optional)
        setTimeout(() => {
          navigate("/transport");
        }, 3000);
      } else {
        Swal.fire({
          title: "Booking Canceled",
          text: "Your transport booking was not completed.",
          icon: "info",
          confirmButtonColor: "#3085d6",
        });
      }
    });
  };

  const calculateTotalCost = (pricePerHour, hours) => {
    return pricePerHour * parseInt(hours);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Transport Booking</h2>
      {transport ? (
        <div className="border rounded-lg p-6 shadow-lg max-w-lg mx-auto">
          <h3 className="text-2xl font-semibold">{transport.type}</h3>
          <p className="text-gray-600">Company: {transport.company}</p>
          <p className="text-blue-500 font-bold">${transport.price}/hour</p>

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
            <label className="block">Booking Duration (Hours):</label>
            <input
              type="number"
              name="hours"
              placeholder="Enter hours"
              value={formData.hours}
              onChange={handleChange}
              min="1"
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
        <p className="text-red-500">No transport selected.</p>
      )}
    </div>
  );
}
