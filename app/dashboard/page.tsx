import WeatherWidget from '@/components/dashboard/WeatherWidget';
import RoomTempWidget from '@/components/dashboard/RoomTempWidget';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeatherWidget />
        <RoomTempWidget />
      </div>
    </div>
  );
}