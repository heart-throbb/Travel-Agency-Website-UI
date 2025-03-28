import { useState } from "react";
import TransportCard from "./TransportCard";

const transportData = [
  { id: 1, type: "Car Rental", company: "Avis", price: 40 },
  { id: 2, type: "Train", company: "Amtrak", price: 60 },
  { id: 3, type: "Bus", company: "Greyhound", price: 30 },
];

export default function Transport() {
  const [transport] = useState(transportData);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Available Transport Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {transport.map((item) => (
          <TransportCard key={item.id} transport={item} />
        ))}
      </div>
    </div>
  );
}
