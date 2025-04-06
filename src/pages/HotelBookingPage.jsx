import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

export default function HotelBookingPage() {
  const location = useLocation();
  const hotel = location.state?.hotel;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

    const today = new Date().toISOString().split("T")[0];

    if (formData.checkIn < today) {
      Swal.fire({
        icon: "error",
        title: "Invalid Check-In Date!",
        text: "Check-in date cannot be in the past.",
      });
      return;
    }

    if (formData.checkOut <= formData.checkIn) {
      Swal.fire({
        icon: "error",
        title: "Invalid Check-Out Date!",
        text: "Check-out date must be after check-in date.",
      });
      return;
    }

    const totalCost = calculateTotalCost(
      hotel.price,
      formData.checkIn,
      formData.checkOut
    );

    Swal.fire({
      title: "Confirm Your Booking",
      html: `
        <div class="text-left">
          <h3 class="font-bold text-lg">${hotel.name}</h3>
          <p class="text-gray-600">${hotel.location}</p>
          <div class="my-3">
            <p><b>Check-in:</b> ${formData.checkIn}</p>
            <p><b>Check-out:</b> ${formData.checkOut}</p>
            <p><b>Guests:</b> ${formData.guests}</p>
          </div>
          <p class="text-xl font-bold text-blue-600">Total: $${totalCost}</p>
        </div>
      `,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm Booking",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Booking Confirmed!",
          html: `
            <div class="text-left">
              <h3 class="font-bold text-lg">${hotel.name}</h3>
              <p class="text-gray-600">${hotel.location}</p>
              <div class="my-3">
                <p><b>Check-in:</b> ${formData.checkIn}</p>
                <p><b>Check-out:</b> ${formData.checkOut}</p>
                <p><b>Guests:</b> ${formData.guests}</p>
              </div>
              <p class="text-xl font-bold text-blue-600">Total: $${totalCost}</p>
              <p class="mt-3">Confirmation sent to ${formData.email}</p>
            </div>
          `,
          icon: "success",
          confirmButtonText: "Great!",
        });
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-8">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full mx-4">
        {hotel ? (
          <>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {hotel.name}
                </h2>
                <p className="text-gray-600">{hotel.location}</p>
                <p className="text-blue-600 text-lg font-semibold">
                  ${hotel.price}/night
                </p>
              </div>
              <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                ⭐ {hotel.rating}
              </div>
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Check-in
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Check-out
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200 mt-6"
              >
                Complete Booking
              </button>
            </form>
          </>
        ) : (
          <p className="text-red-500 text-center">
            No hotel selected. Please go back and select a hotel.
          </p>
        )}
      </div>
    </div>
  );
}
