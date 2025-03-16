import { useState } from "react";
import HotelCard from "./HotelCard";

const hotelsData = [
  { id: 1, name: "Hotel Grand", location: "New York", price: 120, rating: 4.5 },
  { id: 2, name: "Beach Resort", location: "Miami", price: 180, rating: 4.8 },
];

export default function Hotels() {
  const [hotels] = useState(hotelsData);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Hotels</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
