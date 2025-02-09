import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Cloud, Buildings, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-xl">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">SaaS Dashboard</h1>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200">
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/weather" className="flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200">
              <Cloud className="mr-3 h-5 w-5" />
              Weather
            </Link>
          </li>
          <li>
            <Link href="/dashboard/cities" className="flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200">
              <Buildings className="mr-3 h-5 w-5" />
              Cities List
            </Link>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-0 w-full p-6">
        <Button className="w-full flex items-center justify-center" variant="outline">
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>
    </aside>
  );
}