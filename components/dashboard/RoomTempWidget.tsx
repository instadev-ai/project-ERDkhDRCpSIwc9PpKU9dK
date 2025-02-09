import { Thermometer } from 'lucide-react';

export default function RoomTempWidget() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Room Temperature</h2>
        <Thermometer className="h-8 w-8 text-red-500" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl font-bold text-gray-900">21°C</p>
          <p className="text-gray-600 mt-1">Comfortable</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Living Room</p>
          <p className="text-sm text-gray-500 mt-1">Updated 2 min ago</p>
        </div>
      </div>
    </div>
  );
}