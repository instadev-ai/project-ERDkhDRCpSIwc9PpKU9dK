export default function WeatherWidget() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Weather in Current City</h2>
      <p className="text-3xl font-bold">23°C</p>
      <p className="text-gray-600">Partly Cloudy</p>
    </div>
  );
}