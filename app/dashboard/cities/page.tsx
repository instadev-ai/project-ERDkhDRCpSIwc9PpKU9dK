export default function CitiesPage() {
  const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Cities List</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ul className="space-y-2">
          {cities.map((city, index) => (
            <li key={index} className="p-2 hover:bg-gray-100 rounded">{city}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}