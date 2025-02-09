import { Cloud, Sun, Thermometer } from 'lucide-react';

export default function WeatherWidget() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Current Weather</h2>
        <Cloud className="h-8 w-8 text-blue-500" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-gray-900">23°C</p>
          <p className="text-gray-600 mt-1">Partly Cloudy</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">New York City</p>
          <p className="text-sm text-gray-500 mt-1">Updated 5 min ago</p>
        </div>
      </div>
    </div>
  );
}