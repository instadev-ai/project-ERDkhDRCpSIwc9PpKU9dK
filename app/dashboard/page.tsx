import WeatherWidget from '@/components/dashboard/WeatherWidget';
import RoomTempWidget from '@/components/dashboard/RoomTempWidget';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <WeatherWidget />
        <RoomTempWidget />
      </div>
    </div>
  );
}