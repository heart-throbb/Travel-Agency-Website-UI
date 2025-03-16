export default function TransportCard({ transport }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-xl font-semibold">{transport.type}</h3>
      <p className="text-gray-600">Company: {transport.company}</p>
      <p className="text-blue-500 font-bold">${transport.price}</p>
    </div>
  );
}
